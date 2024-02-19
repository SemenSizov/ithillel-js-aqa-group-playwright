const { expect, chromium } = require('@playwright/test');
const { test } = require('../../src/fixture/pageFixtures');
const { GaragePage } = require('../../src/pages/garagePage/GaragePage');

test.describe('Request', () => {
	test.afterAll(async ({ userPage }) => {
		await test.step('Cars data clean up', async () => {
			const request = userPage.request;
			const carListResponse = await request.get('/api/cars');
			const carList = await carListResponse.json();
			const ids = carList.data.map((car) => car.id);
			console.log(ids);
			// for (const id of ids) {
			// 	await request.delete(`/api/cars/${id}`);
			// }
			await Promise.all(ids.map((id) => request.delete(`/api/cars/${id}`)));
		});
	});

	test('page.waitForResponse', async ({ userPage }) => {
		await userPage.pause();
		const request = await userPage.request;
		const res = await request.get('/api/cars/brands');
		console.log(await res.json());
		await userPage.pause();
	});

	test('user can add car', async ({ userPage }) => {
		const garagePage = new GaragePage(userPage);
		await garagePage.navigate();
		const addCarPopup = await garagePage.openAddCarPopup();
		await addCarPopup.fill('BMW', 'X5', 10000);
		await addCarPopup.addCarBtn.click();
		await expect(garagePage.carList.carItem.first()).toBeVisible();
		await garagePage.openAddCarPopup();
		await addCarPopup.fill('BMW', 'X5', 12000);
		await addCarPopup.addCarBtn.click();
		await expect(garagePage.carList.carItem.first()).toBeVisible();
		// expect(await garagePage.carList.getCarCount()).toEqual(1);
	});

	test('new context', async () => {
		const chrome = await chromium.launch();
		const context = await chrome.newContext();
		const request = context.request;
		const carListResponse = await request.get('https://qauto.forstudy.space/api/cars');
		console.log(carListResponse.status());
		const carList = await carListResponse.json();
		console.log(carList);
	});
});
