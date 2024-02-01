const { test, expect } = require('@playwright/test');

test.describe('User page', () => {
	test.describe('Edit info', () => {
		test.describe('Edit email', () => {
			test('should change email', async () => {});
			test('should have validation', async () => {});
		});
	});
});
