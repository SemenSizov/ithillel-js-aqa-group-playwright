import { test } from '@playwright/test';

test.describe('actions', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('actions', async ({ page }) => {
		const signInBtn = page.locator('.btn', { hasText: 'sign in' });
		// const signInBtn2 = page.getByRole('button', { name: 'sign in', exact: true });
		const emailInput = page.locator('#signinEmail');

		console.log(await signInBtn.locator('..').innerText());
		console.log(await signInBtn.locator('..').innerHTML());

		await signInBtn.hover();
		await signInBtn.highlight();
		await signInBtn.click();

		await emailInput.fill('lorem ipsum first');
		await emailInput.fill('lorem ipsum second');
		await emailInput.pressSequentially('WUASF', { delay: 500 });
		await emailInput.clear();
		await emailInput.focus();
		await emailInput.blur();

		const checkBox = page.locator('#remember');
		await checkBox.check();
		await page.waitForTimeout(500);
		await checkBox.uncheck();
		await page.waitForTimeout(1000);
	});
});
