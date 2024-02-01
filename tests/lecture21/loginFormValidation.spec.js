const { test, expect } = require('@playwright/test');
const { default: WelcomePage } = require('../../src/pages/WelcomePage');

test.describe('Login Form Validation !!!!!!', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('should diplay an error message when submitting an empty email', async ({ page }) => {
		const welcomePage = new WelcomePage(page);
		const loginForm = await welcomePage.openLoginForm();
		await loginForm.emailInput.focus();
		await loginForm.emailInput.blur();
		console.log('whatever');
		await expect(loginForm.errorMsg).toHaveText('Email required');
	});

	test('should display an error message when submitting an invalid email @smoke', async ({ page }) => {
		const welcomePage = new WelcomePage(page);
		const loginForm = await welcomePage.openLoginForm();
		await loginForm.emailInput.fill('qwerty');
		await loginForm.emailInput.blur();
		await expect(loginForm.errorMsg).toHaveText('Email is incorrect');
	});
});
