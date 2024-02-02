import BaseComponent from '../../../components/BaseComponent';

export class CarList extends BaseComponent {
	constructor(page) {
		super(page, '.car-list');
		this.carItem = this._container.locator('.car-item');
	}

	async getCarCount() {
		return this.carItem.count();
	}

	getCarByIndex(index) {
		return this.carItem.nth(index);
	}
}
