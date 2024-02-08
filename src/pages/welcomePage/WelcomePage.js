const { Header } = require('../../components/Header');
const { LoginForm } = require('./components/LoginForm');
const { BasePage } = require('../BasePage');
const { GaragePage } = require('../garagePage/GaragePage');

class WelcomePage extends BasePage {
	constructor(page) {
		super(page, '/', '.socials');
		this.header = new Header(this._page);
		this.loginForm = new LoginForm(this._page);
	}

	async openLoginForm() {
		await this.header.signInBtn.click();
		return this.loginForm;
	}

	async loginAsGuest() {
		await this.header.signInAsGuest.click();
		return new GaragePage(this._page);
	}
}

module.exports = { WelcomePage };
