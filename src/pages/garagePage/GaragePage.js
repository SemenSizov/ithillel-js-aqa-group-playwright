const { BasePage } = require('../BasePage');
const { AddCarPopup } = require('./components/AddCarPopup');
const { CarList } = require('./components/CarList');

class GaragePage extends BasePage {
	constructor(page) {
		super(page, '/panel/garage');
		this.addCarBtn = this._page.getByRole('button', { name: 'Add car' });
		this.addCarPopup = new AddCarPopup(this._page);
		this.carList = new CarList(this._page);
	}

	async openAddCarPopup() {
		await this.addCarBtn.click();
		return this.addCarPopup;
	}
}

module.exports = { GaragePage };
