// @ts-check
const { defineConfig } = require('@playwright/test');

require('dotenv').config({ path: './env/.env.qa' });

module.exports = defineConfig({
	testDir: './tests',
	testMatch: '*.spec.js',
	testIgnore: '*skip.spec.js',
	// globalSetup: 'global.setup.js',
	// globalTeardown: 'global.teardown.js',
	workers: '50%',
	fullyParallel: false,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: 'html',

	use: {
		baseURL: process.env.HOST,
		httpCredentials: {
			username: process.env.USER_NAME || '',
			password: process.env.USER_PASS || '',
		},
		trace: 'on',
		screenshot: 'only-on-failure',
		actionTimeout: 5_000,
		navigationTimeout: 15_000,
		browserName: 'chromium',
	},
	expect: {
		timeout: 5_000,
	},

	projects: [
		// {
		// 	name: 'chrome',
		// 	use: {
		// 		browserName: 'chromium',
		// 	},
		// },
		// {
		// 	name: 'smoke setup',
		// 	testMatch: 'smoke-setup.js',
		// },
		// {
		// 	name: 'regression',
		// 	use: {},
		// },
		// {
		// 	name: 'smoke',
		// 	testMatch: '*.smoke.spec.js',
		// 	retries: 0,
		// 	use: { ...devices['Desktop Chrome'] },
		// 	dependencies: ['smoke setup'],
		// },
		// {
		// 	name: 'lecture19',
		// 	testDir: './tests/lecture19',
		// },
		// {
		// 	name: 'lecture22',
		// 	testDir: './tests/lecture22',
		// },
		{ name: 'login', testDir: './setup', testMatch: 'login.setup.js' },
		{ name: 'api', testDir: './setup', testMatch: 'api.setup.js' },
		{
			name: 'lecture23',
			testDir: './tests/lecture23',
			dependencies: ['login'],
		},
		{
			name: 'lecture24',
			testDir: './tests/lecture24',
			// dependencies: ['login'],
		},
		{
			name: 'lecture27',
			testDir: './tests/lecture27',
			use: {
				extraHTTPHeaders: { Cookie: process.env.AUTH_SID || '' },
				// baseURL: process.env.API_URL || '',
			},
			dependencies: ['api'],
		},
	],
});
