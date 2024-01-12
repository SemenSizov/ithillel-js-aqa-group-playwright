// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('This is tests describe', () => {
	test.describe('asaf', () => {
		// hook that is executed once per worker process before all tests.
		test.beforeAll(() => {
			console.log('BEFORE ALL');
		});

		// hook that is executed before each test.
		test.beforeEach(async ({ page }) => {
			await page.goto('/');
		});

		// hook that is executed before each test.
		test.afterEach(() => {
			console.log('AFTER EACH');
		});

		// hook that is executed once per worker after all tests.
		test.afterAll(() => {
			console.log('AFTER ALL');
		});

		// Declares a test.
		test('has title', async ({ page }) => {
			await expect(page.locator('.-guest')).toHaveText('Guest log in');
		});

		// Declares a test.
		test('get started link', async ({ page }) => {
			// Declares a test step that is shown in the report.
			await test.step('Click guest loigin', async () => {
				await page.locator('.-guest').click();
			});
			await expect(page.locator('.panel-page_heading')).toHaveText('GarageAdd car');
		});
	});
});

