const { test } = require('@playwright/test');
const { default: WelcomePage } = require('../../src/pages/welcomePage/WelcomePage.js');

test.describe('Storage state', () => {
	test.skip('can be saved', async ({ page }) => {
		const welcomePage = new WelcomePage(page);
		await welcomePage.navigate();
		const loginForm = await welcomePage.openLoginForm();
		await loginForm.loginWithCredentials(process.env.JOHN_EMAIL, process.env.JOHN_PASS);
		await page.waitForSelector('app-garage');
		await page.context().storageState({ path: 'user-garage.json' });
	});
});
