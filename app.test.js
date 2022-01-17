describe("Vehicle class tests", () => {
	let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
	it("should create new Vehicle and have method honk, which returns Beep.", () => {
		expect(myFirstVehicle.honk()).toEqual("Beep.");
	});

	it("should create new Vehicle and have method toString.", () => {
		expect(myFirstVehicle.toString()).toEqual(
			"The vehicle is a Honda Monster Truck from 1999."
		);
	});
});

describe("Car class tests", () => {
	let myFirstCar = new Car("Toyota", "Corolla", 2005);
	it("should create new Car and have method honk, which returns Beep.", () => {
		expect(myFirstCar.honk()).toEqual("Beep.");
	});

	it("should create new Car and have method toString.", () => {
		expect(myFirstCar.toString()).toEqual(
			"The vehicle is a Toyota Corolla from 2005."
		);
	});
	it("should have numWheels = 4", () => {
		expect(myFirstCar.numWheels).toEqual(4);
	});
});

describe("Motorcylce class tests", () => {
	let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
	it("should create new Motorcyle and have method honk, which returns Beep.", () => {
		expect(myFirstMotorcycle.honk()).toEqual("Beep.");
	});

	it("should create new Motorcyle and have method toString", () => {
		expect(myFirstMotorcycle.toString()).toEqual(
			"The vehicle is a Honda Nighthawk from 2000."
		);
	});
	it("should have numWheels = 4", () => {
		expect(myFirstMotorcycle.numWheels).toEqual(2);
	});
	it("Should have the revEngine method", () => {
		expect(myFirstMotorcycle.revEngine()).toEqual("VROOM!!!");
	});
});
