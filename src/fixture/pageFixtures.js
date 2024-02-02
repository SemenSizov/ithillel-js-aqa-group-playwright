const base = require('@playwright/test');
const { chromium } = require('@playwright/test');

const test = base.test.extend({
	userPage: async ({}, use) => {
		const chrome = await chromium.launch({ headless: false });
		const context = await chrome.newContext({ storageState: 'user-garage.json' });
		const page = await context.newPage();
		await use(page);
	},
	guestPage: async ({}, use) => {
		const chrome = await chromium.launch({ headless: false });
		const context = await chrome.newContext({ storageState: 'guest-garage.json' });
		const page = await context.newPage();
		await use(page);
	},
});

const extendedTest = test.extend({
	users: async ({}, use) => {
		const data = {
			guestUser: {},
			adminUser: {},
		};
		await use(data);
	},
	cars: async ({}, use) => {
		const data = {
			bmw: {},
			totyota: {},
		};
		await use(data);
	},
});

module.exports.test = test;
module.exports.extendedTest = extendedTest;
