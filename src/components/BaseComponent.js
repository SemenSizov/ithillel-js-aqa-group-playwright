class BaseComponent {
	constructor(page, container) {
		this._page = page;
		this._container = this._page.locator(container);
	}
}

module.exports = { BaseComponent };
