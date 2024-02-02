import BasePage from '../BasePage';
import { AddCarPopup } from './components/AddCarPopup';
import { CarList } from './components/CarList';

export default class GaragePage extends BasePage {
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
