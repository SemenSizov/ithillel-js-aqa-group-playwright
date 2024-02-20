const { test, expect } = require('@playwright/test');
const { CarsController } = require('../../src/controllers/CarsController');

const cars = [
	{
		carBrandId: 1,
		carModelId: 1,
		mileage: 122,
	},
	{
		carBrandId: 1,
		carModelId: 2,
		mileage: 122,
	},
	{
		carBrandId: 1,
		carModelId: 3,
		mileage: 122,
	},
	{
		carBrandId: 1,
		carModelId: 4,
		mileage: 122,
	},
	{
		carBrandId: 1,
		carModelId: 5,
		mileage: 122,
	},
	{
		carBrandId: 4,
		carModelId: 16,
		mileage: 122,
	},
];

test.describe('Cars', () => {
	test('could be created and deleted', async ({ request }) => {
		const carsController = new CarsController(request);
		await test.step('Create cars', async () => {
			for (const car of cars) {
				await test.step(`Car model ${car.carModelId}, brand ${car.carBrandId} could be created`, async () => {
					const createResp = await carsController.createCar(car);
					expect(createResp.status).toBe(201);
				});
			}
		});
		const carsResponse = await carsController.getAllCars();
		await test.step('All cars could be delted', async () => {
			const carIds = carsResponse.json.data.map((car) => car.id);
			for (const id of carIds) {
				const deleteResp = await carsController.deleteCar(id);
				expect(deleteResp.status).toBe(200);
			}
		});
	});
});
