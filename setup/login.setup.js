const { test } = require('@playwright/test');
const { WelcomePage } = require('../src/pages/welcomePage/WelcomePage.js');

test.describe('Save storage state', () => {
	test('login as user', async ({ page }) => {
		const welcomePage = new WelcomePage(page);
		await welcomePage.navigate();
		const loginForm = await welcomePage.openLoginForm();
		await loginForm.loginWithCredentials(process.env.JOHN_EMAIL, process.env.JOHN_PASS);
		await page.waitForSelector('app-garage');
		await page.context().storageState({ path: 'user-state.json' });
	});
});
