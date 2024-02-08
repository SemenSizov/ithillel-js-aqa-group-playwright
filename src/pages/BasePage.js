const { Header } = require('../components/Header');

class BasePage {
	constructor(page, url, waitPageSlector = 'html') {
		this._page = page;
		this._url = url;
		this._waitPageLocator = this._page.locator(waitPageSlector);
		this._header = new Header(this._page);
	}

	async navigate() {
		await this._page.goto(this._url);
		await this._waitPageLocator.waitFor({ state: 'visible' });
	}
}

module.exports = { BasePage };
