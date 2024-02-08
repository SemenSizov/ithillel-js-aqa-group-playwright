const { expect } = require('@playwright/test');
const { test } = require('../../src/fixture/pageFixtures');
const { WelocomePage } = require('../../src/pages/welcomePage/WelcomePage.js');

test.describe('Guest', () => {
	test('should be able to add a car', async ({ page }) => {
		const welocomePage = new WelocomePage(page);
		await welocomePage.navigate();
		const garagePage = await welocomePage.loginAsGuest();
		const addCarPopup = await garagePage.openAddCarPopup();
		await addCarPopup.fill('BMW', 'X5', 10000);
		await addCarPopup.addCarBtn.click();
		await expect(garagePage.carList.carItem).toBeVisible();
		expect(await garagePage.carList.getCarCount()).toEqual(1);
	});
});
