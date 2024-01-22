import { Locator, Page } from '@playwright/test';

export class LoginFormTs {
	private readonly _page: Page;
	private readonly _container: Locator;
	private readonly _emailInput: Locator;
	private readonly _errorMsg: Locator;

	constructor(page: Page) {
		this._page = page;
		this._container = this._page.locator('app-signin-modal');
		this._emailInput = this._container.locator('#signinEmail');
		this._errorMsg = this._container.locator('.invalid-feedback');
	}

	get emailInput() {
		return this._emailInput;
	}

	get errorMsg() {
		return this._errorMsg;
	}
}
