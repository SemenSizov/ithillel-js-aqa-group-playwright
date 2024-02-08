const { test } = require('@playwright/test');
const { WelcomePage } = require('../../src/pages/welcomePage/WelcomePage');

test.describe('Evaluate', () => {
	test.skip('could ease your life', async ({ page }) => {
		const welcomePage = new WelcomePage(page);
		await welcomePage.navigate();
		const storageValueStr = 'testing';
		await page.evaluate((storageValue) => {
			window.localStorage.setItem('playwright', storageValue);
		}, 'testValue');
		await page.evaluate(
			({ storageValue, srt1 }) => {
				window.localStorage.setItem('playwright', storageValue);
				window.localStorage.setItem('playwright2', srt1);
			},
			{
				storageValue: storageValueStr,
				srt1: 'str1Value',
			},
		);
		const offsetWidth = await page.locator('.hero-descriptor_btn').evaluate((el) => el.offsetWidth);
		console.log(offsetWidth);
	});
});
