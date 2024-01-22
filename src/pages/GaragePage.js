import BasePage from './BasePage';

export default class GaragePage extends BasePage {
	constructor(page) {
		super(page, '/panel/garage');
		this.addCarBtn = this._page.getByRole('button', { name: 'Add car' });
	}
}
