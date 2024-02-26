// @ts-check
const { defineConfig } = require('@playwright/test');

require('dotenv').config({ path: './env/.env' });

module.exports = defineConfig({
	testDir: './tests',
	testMatch: '*.spec.js',
	testIgnore: '*skip.spec.js',
	workers: '50%',
	fullyParallel: false,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: [['html', { open: 'never' }]],
	use: {
		baseURL: process.env.HOST,
		httpCredentials: {
			username: process.env.USER_NAME || '',
			password: process.env.USER_PASS || '',
		},
		trace: 'retain-on-failure',
		screenshot: 'only-on-failure',
		actionTimeout: 5_000,
		navigationTimeout: 15_000,
		browserName: 'chromium',
	},
	expect: {
		timeout: 5_000,
	},

	projects: [
		{ name: 'login', testDir: './setup', testMatch: 'login.setup.js' },
		{ name: 'api', testDir: './setup', testMatch: 'api.setup.js' },
		{
			name: 'cleanUp',
			testDir: './setup',
			testMatch: 'data.cleanup.js',
			use: {
				extraHTTPHeaders: { Cookie: process.env.AUTH_SID || '' },
			},
			dependencies: ['api'],
		},
		{
			name: 'lecture29',
			testDir: './tests/lecture29',
			use: {
				extraHTTPHeaders: { Cookie: process.env.AUTH_SID || '' },
			},
			dependencies: ['api', 'login', 'cleanUp'],
		},
	],
});
