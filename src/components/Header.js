const { BaseComponent } = require('./BaseComponent');

class Header extends BaseComponent {
	constructor(page) {
		super(page, 'header');
		this.signInBtn = this._container.locator('.header_signin');
		this.signInAsGuest = this._container.locator('.-guest');
	}

	// NOT OK
	// clickSignInAsGuest(){
	//   return this._container.locator('.-guest').click();
	// }

	// NOT OK
	// isGuestLoignBtnVisible(){
	//   return this._container.locator('.-guest').isVisible();
	// }
}

module.exports = { Header };
