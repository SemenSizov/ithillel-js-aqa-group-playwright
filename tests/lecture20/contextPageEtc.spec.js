import { chromium, firefox, test } from '@playwright/test';

test.describe('Context, browser, page etc', () => {
	test('browser', async () => {
		const chromeBrowser = await chromium.launch({ headless: false });
		const fireFoxBrowser = await firefox.launch({ headless: false });
		const chromeLogInContext = await chromeBrowser.newContext({
			httpCredentials: {
				username: 'guest',
				password: 'welcome2qauto',
			},
		});
		const pageLoggedIn1 = await chromeLogInContext.newPage();
		const pageLoggedIn2 = await chromeLogInContext.newPage();
		await pageLoggedIn1.goto('https://qauto.forstudy.space/');
		await pageLoggedIn2.goto('https://playwright.dev');
		const noLogInContext = await chromeBrowser.newContext();
		const notLoggedInPage = await noLogInContext.newPage();
		await notLoggedInPage.goto('https://qauto.forstudy.space/');
		const fireFoxPage = await fireFoxBrowser.newPage();
		await fireFoxPage.goto('https://google.com');
		await pageLoggedIn1.pause();
	});
});
