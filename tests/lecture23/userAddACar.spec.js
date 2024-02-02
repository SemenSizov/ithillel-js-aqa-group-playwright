const { expect } = require('@playwright/test');
const { test } = require('../../src/fixture/pageFixtures');
import GaragePage from '../../src/pages/garagePage/GaragePage';

test.describe('User', () => {
	test('should be able to add a car', async ({ userPage }) => {
		const garagePage = new GaragePage(userPage);
		await garagePage.navigate();
		const addCarPopup = await garagePage.openAddCarPopup();
		await addCarPopup.fill('BMW', 'X5', 10000);
		await addCarPopup.addCarBtn.click();
		await expect(garagePage.carList.carItem).toBeVisible();
		expect(await garagePage.carList.getCarCount()).toEqual(1);
	});
});
