// const { expect } = require('@playwright/test');
const { expect } = require('@playwright/test');
const { test } = require('../../src/fixture/pageFixtures');
const { GaragePage } = require('../../src/pages/garagePage/GaragePage');

test.describe('Network', () => {
	test('page.on(request/response) can view response/requests data', async ({ userPage }) => {
		const garagePage = new GaragePage(userPage);
		await garagePage.navigate();

		userPage.on('response', async (response) => {
			console.log(await response.json());
		});

		await garagePage.openAddCarPopup();
	});

	test('page.route can intercept', async ({ userPage }) => {
		const garagePage = new GaragePage(userPage);
		await garagePage.navigate();
		await userPage.route('**/cars/brands', (route) => {
			console.log(route.request().url());
			route.continue();
		});
		await garagePage.openAddCarPopup();
		await userPage.pause();
	});

	test('page.route can fulfil', async ({ userPage }) => {
		const garagePage = new GaragePage(userPage);
		await garagePage.navigate();
		await userPage.route('**/cars/brands', (route) => {
			route.fulfill({
				status: 200,
				contentType: 'application/json',
				body: JSON.stringify({
					status: 'ok',
					data: [
						{
							id: 1,
							title: 'Audi234',
							logoFilename: 'audi.png',
						},
						{
							id: 2,
							title: 'BMW2',
							logoFilename: 'bmw.png',
						},
						{
							id: 3,
							title: 'FordMustang',
							logoFilename: 'ford.png',
						},
						{
							id: 4,
							title: 'Porsche',
							logoFilename: 'porsche.png',
						},
						{
							id: 5,
							title: 'Fiat',
							logoFilename: 'fiat.png',
						},
					],
				}),
			});
		});
		await garagePage.openAddCarPopup();
		await userPage.pause();
	});

	test('page.route can fetch and fulfill', async ({ userPage }) => {
		const garagePage = new GaragePage(userPage);
		await garagePage.navigate();
		await userPage.route('**/cars/brands', async (route) => {
			const response = await route.fetch();
			const data = await response.json();
			data.data.forEach((brand) => {
				brand.title = brand.title + 'TEST';
			});
			route.fulfill({
				status: 200,
				contentType: 'application/json',
				body: JSON.stringify(data),
			});
		});
		await garagePage.openAddCarPopup();
		await userPage.pause();
	});

	test('page.waitForResponse', async ({ userPage }) => {
		const garagePage = new GaragePage(userPage);
		await garagePage.navigate();
		await userPage.pause();
		await Promise.all([userPage.waitForResponse('**/cars/brands'), garagePage.openAddCarPopup()]);

		const isVisible = await garagePage.addCarPopup.isVisible();
		expect(isVisible).toEqual(true);

		await expect(garagePage.addCarPopup).toBeVisible();

		await userPage.pause();
	});
});
