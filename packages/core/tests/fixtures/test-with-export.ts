import { step, setup, By, Until } from '@flood/element'

/**
 * Example Test
 *
 * This is an example test
 */
export default function() {
	setup({
		loopCount: Infinity,
		actionDelay: 0,
		stepDelay: 0,
		waitTimeout: '60s',
		stages: [
			{ duration: '1m', target: 10 },
			{ duration: '10m', target: 10 },
			{ duration: '1m', target: 0 },
		],
	})

	step('Invalid Step', async () => {
		setup({
			loopCount: 10,
		})
	})

	step('Test Step', async driver => {
		await driver.visit('<URL>')
		let link = await driver.findElement(By.linkText('show bar'))
		await link.click()
		await driver.wait(Until.elementIsVisible('#foo'))
	})
}
