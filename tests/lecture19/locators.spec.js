import { expect, test } from '@playwright/test';

test.describe('queries', () => {
	// let testPage;

	// test.beforeAll(async ({ context }) => {
	// 	const context = await browser.newContext();
	// 	testPage = await context.newPage();
	// 	await testPage.goto('/');
	// });

	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('check 2 btn locators', async ({ page }) => {
		const aboutBtn = page.getByRole('button', { name: 'About' });
		const aboutBtn2 = page.locator('.btn', { hasText: 'About' });
		await expect(aboutBtn).toBeVisible();
		await expect(aboutBtn2).toBeVisible();
	});

	test('check btns locator', async ({ page }) => {
		const btns = page.locator('.btn.header-link');
		await expect(btns.first()).toBeVisible();
		await expect(btns.nth(1)).toBeVisible();
		await expect(btns.last()).toBeVisible();

		const btnsNumber = await btns.count();

		for (let idx = 0; idx < btnsNumber; idx++) {
			await expect(btns.nth(idx)).toBeVisible();
		}

		for (const btn of await btns.all()) {
			await expect(btn).toBeVisible();
		}
	});

	test('locators chainig', async ({ page }) => {
		const headerLeftBtns = page.locator('.header_left').locator('.btn');
		const headerLeftBtns2 = page.locator('.header_left').getByRole('button');

		// not real element
		// const button = page.getByRole('button').and(page.getByTitle('Subscribe'));
	});

	test('check locator filtering', async ({ page }) => {
		const headerContainer = page.locator('.container', { has: page.locator('.header_inner') });
		console.log(await headerContainer.count());

		const btns = page.locator('.btn.header-link');
		const aboutBtn = btns.filter({ hasText: 'About' });
		await expect(aboutBtn).toHaveText('About');
	});
});
