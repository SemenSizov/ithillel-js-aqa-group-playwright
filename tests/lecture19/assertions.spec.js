import { expect, test } from '@playwright/test';

test.describe('assertions', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('non retrying assertions', async ({ page }) => {
		const signInBtn = page.locator('.btn', { hasText: 'sign in' });
		const title = await signInBtn.textContent();
		expect(title, 'Title should be correct').toEqual('Sign In');
	});

	test('autoretry assertions', async ({ page }) => {
		const signInBtn = page.locator('.btn', { hasText: 'sign in' });
		await expect(signInBtn, 'Title shoud be correct').toHaveText('sign In', { ignoreCase: true });
	});

	test('soft assertions', async ({ page }) => {
		const signInBtn = page.locator('.btn', { hasText: 'sign in' });
		const abouBtn = page.locator('.btn', { hasText: 'About' });
		const homeBtn = page.locator('.btn', { hasText: 'Home' });
		await expect.soft(signInBtn, 'Title shoud be correct').toHaveText('sig In', { ignoreCase: true });
		await expect.soft(abouBtn, 'Title shoud be correct').toHaveText('about', { ignoreCase: true });
		await expect.soft(homeBtn, 'Title shoud be correct').toHaveText('home', { ignoreCase: true });
	});

	test.only('to have screenshot', async ({ page }) => {
		const heroDesc = page.locator('.hero-descriptor');
		await expect(heroDesc).toHaveScreenshot('hero-description.png', { maxDiffPixelRatio: 0.02 });
	});
});
