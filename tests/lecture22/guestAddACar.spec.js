const { test, expect } = require('@playwright/test');
import WelcomePage from '../../src/pages/welcomePage/WelcomePage';

test.describe('Guest user', () => {
	test('should be able to add a car', async ({ page }) => {
		const welcomePage = new WelcomePage(page);
		await welcomePage.navigate();
		const garagePage = await welcomePage.loginAsGuest();
		const addCarPopup = await garagePage.openAddCarPopup();
		await addCarPopup.fill('BMW', 'X5', -10);
		await addCarPopup._milageInput.blur();
		await expect(addCarPopup.errorMsg, 'Error message is visible').toBeVisible();
		await expect(addCarPopup.errorMsg, 'Error message is correct').toHaveText('Mileage has to be from 0 to 999999');
	});
});
