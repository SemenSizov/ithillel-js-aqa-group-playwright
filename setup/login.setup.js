const { test } = require('@playwright/test');
const { default: WelcomePage } = require('../src/pages/welcomePage/WelcomePage');

test.describe('Save storage state', () => {
	test('login as guest', async ({ page }) => {
		const welcomePage = new WelcomePage(page);
		await welcomePage.navigate();
		await welcomePage.loginAsGuest();
		await page.waitForSelector('app-garage');
		await page.context().storageState({ path: 'guest-garage.json' });
	});
	test('login as user', async ({ page }) => {
		const welcomePage = new WelcomePage(page);
		await welcomePage.navigate();
		const loginForm = await welcomePage.openLoginForm();
		await loginForm.loginWithCredentials(process.env.JOHN_EMAIL, process.env.JOHN_PASS);
		await page.waitForSelector('app-garage');
		await page.context().storageState({ path: 'user-garage.json' });
	});
});
