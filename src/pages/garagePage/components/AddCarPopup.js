const { expect, test } = require('@playwright/test');
const { BaseComponent } = require('../../../components/BaseComponent');

class AddCarPopup extends BaseComponent {
	constructor(page) {
		super(page, 'app-add-car-modal');
		this._brandSelect = this._container.locator('#addCarBrand');
		this._modelSelect = this._container.locator('#addCarModel');
		this._milageInput = this._container.locator('#addCarMileage');
		this.addCarBtn = this._container.getByRole('button', { name: 'Add' });
		this.cancelBtn = this._container.getByRole('button', { name: 'Cancel' });
		this.errorMsg = this._container.locator('.invalid-feedback');
	}

	async fill(brand, model, milage) {
		return test.step('Fill add car form', async () => {
			await this._brandSelect.selectOption({ label: brand });
			await this._modelSelect.selectOption({ label: model });
			await this._milageInput.fill(milage.toString());
		});
	}

	async addCar(brand, model, milage) {
		await this.fill(brand, model, milage);
		await this.addCarBtn.click();
	}

	async checkError(error) {
		await expect(this.errorMsg).toHaveText(error);
	}
}

module.exports = { AddCarPopup };
