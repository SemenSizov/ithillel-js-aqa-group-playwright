const { test } = require('@playwright/test');
const { CarsController } = require('../src/controllers/CarsController');

test('Delete user cars', async ({ request }) => {
	const carsController = new CarsController(request);
	const cars = await carsController.getAllCars();
	const carIds = cars.json.data.map((car) => car.id);
	for (const id of carIds) {
		await carsController.deleteCar(id);
	}
});
