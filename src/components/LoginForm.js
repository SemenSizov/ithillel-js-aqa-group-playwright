import BaseComponent from './BaseComponent';

export default class LoginForm extends BaseComponent {
	constructor(page) {
		super(page, 'app-signin-modal');
		this.emailInput = this._container.locator('#signinEmail');
		this.errorMsg = this._container.locator('.invalid-feedback');
	}
}
