const { test, chromium } = require('@playwright/test');

test('api login', async () => {
	const browser = await chromium.launch();
	const context = await browser.newContext();
	const request = context.request;
	const authResp = await request.post(`${process.env.API_URL}/auth/signin`, {
		data: {
			email: process.env.JOHN_EMAIL,
			password: process.env.JOHN_PASS,
			remember: false,
		},
	});
	const sid = authResp.headers()['set-cookie'].split(';')[0];
	process.env.AUTH_SID = sid;
});
