import { Schedular } from './Schedular'
import { EvaluatedScript, mustCompileFile, ElementOptions } from '@flood/element-core'

export async function runCommandLine(opts: ElementOptions): Promise<void> {
	const { logger, testScript } = opts

	const runner = new Schedular({})

	const installSignalHandlers = true

	if (installSignalHandlers) {
		process.on('SIGINT', async () => {
			logger.debug('Received SIGINT')
			await runner.stop()
		})

		process.once('SIGUSR2', async () => {
			// Usually received by nodemon on file change
			logger.debug('Received SIGUSR2')
			await runner.stop()
			process.kill(process.pid, 'SIGUSR2')
		})
	}

	logger.debug(`Loading test script: ${testScript}`)

	const testScriptFactory = async (): Promise<EvaluatedScript> => {
		return new EvaluatedScript(opts.runEnv, await mustCompileFile(testScript))
	}

	await runner.run(testScriptFactory)
}
