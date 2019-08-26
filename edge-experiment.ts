import * as puppeteer from 'puppeteer'
;(async () => {
	const browser = await puppeteer.launch({
		executablePath: '/Applications/Microsoft Edge Beta.app/Contents/MacOS/Microsoft Edge Beta',
		headless: false,
	})

	const page = await browser.newPage()
	await page.goto('https://pptr.dev')
	await page.screenshot({
		path: 'pptr_dev.jpg',
	})
	await page.close()
	await browser.close()
})()
