// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
	testDir: './tests',
	testMatch: '*.spec.js',
	testIgnore: '*skip.spec.js',
	globalSetup: 'global.setup.js',
	globalTeardown: 'global.teardown.js',
	/* Run tests in files in parallel */
	workers: '50%',
	fullyParallel: false,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,
	/* Opt out of parallel tests on CI. */
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: 'html',
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: 'https://qauto.forstudy.space/',
		httpCredentials: {
			username: 'guest',
			password: 'welcome2qauto',
		},
		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'on',
		actionTimeout: 5_000,
		navigationTimeout: 15_000,
		browserName: 'chromium',
	},
	expect: {
		timeout: 5_000,
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: 'smoke setup',
			testMatch: 'smoke-setup.js',
		},
		{
			name: 'regression',
			use: {},
		},
		{
			name: 'smoke',
			testMatch: '*.smoke.spec.js',
			retries: 0,
			use: { ...devices['Desktop Chrome'] },
			dependencies: ['smoke setup'],
		},

		// {
		// 	name: 'firefox',
		// 	use: { ...devices['Desktop Firefox'] },
		// },

		// {
		// 	name: 'webkit',
		// 	use: { ...devices['Desktop Safari'] },
		// },

		/* Test against mobile viewports. */
		// {
		//   name: 'Mobile Chrome',
		//   use: { ...devices['Pixel 5'] },
		// },
		// {
		//   name: 'Mobile Safari',
		//   use: { ...devices['iPhone 12'] },
		// },

		/* Test against branded browsers. */
		// {
		//   name: 'Microsoft Edge',
		//   use: { ...devices['Desktop Edge'], channel: 'msedge' },
		// },
		// {
		//   name: 'Google Chrome',
		//   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
		// },
	],

	/* Run your local dev server before starting the tests */
	// webServer: {
	//   command: 'npm run start',
	//   url: 'http://127.0.0.1:3000',
	//   reuseExistingServer: !process.env.CI,
	// },
});

