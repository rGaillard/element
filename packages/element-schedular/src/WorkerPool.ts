import { ChildMessage, OnStart, OnEnd, WorkerInterface, ChildMessages } from './types'
import { Worker, WorkerOptions } from './Worker'
import mergeStream from 'merge-stream'

const FORCE_EXIT_DELAY = 500

export type WorkerPoolOptions = {
	setupArgs: Array<unknown>
	maxRetries: number
	numWorkers: number
}

export type PoolExitResult = {
	forceExited: boolean
}

const identityFn = () => {
	return
}

export class WorkerPool {
	private readonly workers: Array<WorkerInterface>
	public readonly stderr: NodeJS.ReadableStream
	public readonly stdout: NodeJS.ReadableStream

	constructor(public options: WorkerPoolOptions) {
		this.workers = new Array(options.numWorkers)

		const stdout = mergeStream()
		const stderr = mergeStream()

		const { maxRetries } = options

		for (let i = 0; i < options.numWorkers; i++) {
			const workerOptions: WorkerOptions = {
				maxRetries,
				workerId: i,
			}

			const worker = this.createWorker(workerOptions)
			const workerStdout = worker.getStdout()
			const workerStderr = worker.getStderr()

			if (workerStdout) {
				stdout.add(workerStdout)
			}

			if (workerStderr) {
				stderr.add(workerStderr)
			}

			this.workers[i] = worker
		}

		this.stdout = stdout
		this.stderr = stderr
	}

	send(workerId: number, request: ChildMessage, onStart: OnStart, onEnd: OnEnd): void {
		this.getWorkerById(workerId).send(request, onStart, onEnd)
	}

	sendEach(request: ChildMessage, onStart: OnStart, onEnd: OnEnd): void {
		this.workers.forEach(worker => {
			worker.send(request, onStart, onEnd)
		})
	}

	createWorker(workerOptions: WorkerOptions): WorkerInterface {
		return new Worker(workerOptions)
	}

	async waitForExit(): Promise<void> {
		await Promise.all(this.workers.map(worker => worker.waitForExit()))
	}

	async end(): Promise<PoolExitResult> {
		// We do not cache the request object here. If so, it would only be only
		// processed by one of the workers, and we want them all to close.
		const workerExitPromises = this.workers.map(async worker => {
			worker.send([ChildMessages.END, false], identityFn, identityFn)

			// Schedule a force exit in case worker fails to exit gracefully so
			// await worker.waitForExit() never takes longer than FORCE_EXIT_DELAY
			let forceExited = false
			const forceExitTimeout = setTimeout(() => {
				worker.forceExit()
				forceExited = true
			}, FORCE_EXIT_DELAY)

			await worker.waitForExit()
			// Worker ideally exited gracefully, don't send force exit then
			clearTimeout(forceExitTimeout)

			return forceExited
		})

		const workerExits = await Promise.all(workerExitPromises)
		return workerExits.reduce<PoolExitResult>(
			(result, forceExited) => ({
				forceExited: result.forceExited || forceExited,
			}),
			{ forceExited: false },
		)
	}

	private getWorkerById(workerId: number): WorkerInterface {
		return this.workers[workerId]
	}
}
