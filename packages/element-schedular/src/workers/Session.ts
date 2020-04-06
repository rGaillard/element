// import { ConnectionTransport } from 'puppeteer'

// export class Session implements ConnectionTransport {
// 	send(message: string): void {}

// 	close(): void {}

// 	onmessage(message: string): void {}

// 	onclose(): void {}
// }

// async function createBrowser() {
// 	const browser = await Browser.create(
// 		connection,
// 		[],
// 		ignoreHTTPSErrors,
// 		defaultViewport,
// 		runner.proc,
// 		runner.close.bind(runner),
// 	)
// 	await browser.waitForTarget(t => t.type() === 'page')
// 	return browser
// }

// class Transport {}

// type Options = { usePipe?: boolean; timeout: number; slowMo: number; preferredRevision: string }

// export class Launcher {
// 	private connection: Connection

// 	async setupConnection(options: Options): Connection {
// 		const { slowMo } = options
// 		const transport = new Transport()

// 		this.connection = new Connection('', transport, slowMo)
// 		return this.connection
// 	}
// }
