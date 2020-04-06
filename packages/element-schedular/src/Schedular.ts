import { TestSettings, EvaluatedScript, launchWithoutPage } from '@flood/element-core'
import { cpus } from 'os'
import { AsyncFactory } from '@flood/element-core/src/utils/Factory'
import { WorkerPool } from './WorkerPool'
import { ChildMessages } from './types'

export class Schedular {
	constructor(public settings: TestSettings) {}

	public async run(testScriptFactory: AsyncFactory<EvaluatedScript>) {
		const threadCount = this.settings.threads ?? 10

		if (!this.checkThreadCount(threadCount))
			throw new Error(`Thread count ${threadCount} too high for available CPUs, please decrease`)

		const testScript = await testScriptFactory()

		console.log(testScript.script.source)

		const browser = await this.launchBrowser()

		const pool = new WorkerPool({ maxRetries: 1, numWorkers: threadCount, setupArgs: [] })

		pool.stdout.pipe(process.stdout)
		pool.stderr.pipe(process.stderr)

		const wsURL = browser.wsEndpoint()

		pool.sendEach(
			[ChildMessages.CALL, 'connect', [wsURL, testScript.script.source]],
			worker => {
				console.log('worker start', worker.workerId)
			},
			err => {
				if (err) {
					console.log('worker error', err)
				} else {
					console.log('Success')
				}
			},
		)

		// const browser = await this.launchBrowser()
		// for (let index = 0; index < threadCount; index++) {
		// 	const page = await browser.newPage()
		// 	await page.goto('https://challenge.flood.io')
		// 	console.log('Sleep')
		// 	await new Promise(yeah => setTimeout(yeah, 1e3))
		// }

		await pool.waitForExit()
		await new Promise(yeah => setTimeout(yeah, 1e3))
		await browser.close()

		process.on('SIGQUIT', async () => {
			await browser.close()
		})

		process.on('SIGINT', async () => {
			await browser.close()
		})

		process.once('SIGUSR2', async () => {
			await browser.close()
			process.kill(process.pid, 'SIGUSR2')
		})
	}

	public async stop() {
		return null
	}

	private async launchBrowser() {
		const browser = await launchWithoutPage({ headless: false })
		for (const page of await browser.pages()) {
			await page.close()
		}
		return browser
	}

	private checkThreadCount(count: number): boolean {
		return count <= cpus().length * 7
	}
}
