const { BaseComponent } = require('../../../components/BaseComponent');
const { GaragePage } = require('../../garagePage/GaragePage');

class LoginForm extends BaseComponent {
	constructor(page) {
		super(page, 'app-signin-modal');
		this.emailInput = this._container.locator('#signinEmail');
		this.passwordInput = this._container.locator('#signinPassword');
		this.loginBtn = this._container.getByRole('button', { name: 'Login' });
		this.errorMsg = this._container.locator('.invalid-feedback');
	}

	async loginWithCredentials(email, password) {
		await this.fill(email, password);
		await this.loginBtn.click();
		return new GaragePage(this._page);
	}

	async fill(email, password) {
		await this.emailInput.fill(email);
		await this.passwordInput.fill(password);
	}
}

module.exports = { LoginForm };
