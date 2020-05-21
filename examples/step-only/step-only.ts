import { step, TestSettings, Until, By, Device } from '@flood/element'
import * as assert from 'assert'

export const settings: TestSettings = {
	loopCount: 1,
}

/**
 * youtube
 * @version 1.0
 */
export default () => {
	step('Test: Start', async browser => {
		await browser.visit('https://www.google.com/')
	})
	step.skip('Test: click voice button', async browser => {
		let btnPlay = await browser.findElement(
			By.xpath('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[3]/div[2]/svg/path[1]'),
		)
		btnPlay.click()
	})
	step('Test: take screenshot', async browser => {
		await browser.takeScreenshot()
	})
}
