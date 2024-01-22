import { chromium, test } from '@playwright/test';

test.describe('Context, browser, page etc', () => {
	test.skip('browser', async () => {
		const browser = await chromium.launch({ headless: false });
		const context = await browser.newContext({
			httpCredentials: {
				username: 'guest',
				password: 'welcome2qauto',
			},
		});
		const page = await context.newPage();
		await page.goto('https://qauto.forstudy.space/');
		await page.pause();
	});
});
