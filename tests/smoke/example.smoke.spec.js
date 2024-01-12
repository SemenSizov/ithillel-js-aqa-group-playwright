const { test, expect } = require('@playwright/test');

test.describe('expample tests', () => {
	test.describe('asaf', () => {
		test.beforeEach(async ({ page }) => {
			await page.goto('/');
		});

		test('has title', async ({ page }) => {
			await expect(page.locator('.-guest')).toHaveText('Guest log in');
		});

		test('get started link', async ({ page }) => {
			await page.locator('.-guest').click();
			await expect(page.locator('.panel-page_heading')).toHaveText('GarageAdd car');
		});
	});
});

