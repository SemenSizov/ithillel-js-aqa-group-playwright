import Header from '../../components/Header';
import LoginForm from './components/LoginForm';
import BasePage from '../BasePage';
import GaragePage from '../garagePage/GaragePage';

export default class WelcomePage extends BasePage {
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
