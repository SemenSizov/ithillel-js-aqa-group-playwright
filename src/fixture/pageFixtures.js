const base = require('@playwright/test');
const { chromium } = require('@playwright/test');

const test = base.test.extend({
	userPage: async ({}, use) => {
		const chrome = await chromium.launch({ headless: true });
		const context = await chrome.newContext({ storageState: 'user-state.json' });
		const page = await context.newPage();
		await use(page);
	},
});

module.exports.test = test;
