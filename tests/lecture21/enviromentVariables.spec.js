import { test } from '@playwright/test';

test.only('show environemt variables', async () => {
	console.log(process.env.USER_NAME);
	console.log(process.env.USER_PASS);
	console.log(process.env.HOST);
	console.log(process.env.TEST_VAR);
	console.log(typeof Number.parseInt(process.env.TEST_VAR));
	console.log(typeof +process.env.TEST_VAR);
});
