const { test, expect } = require('@playwright/test');

test.describe('User page', () => {
	test.describe('Edit info', () => {
		test.describe('Edit name', () => {
			test('should change name', async () => {});
			test('should have validation', async () => {});
		});
	});
});
