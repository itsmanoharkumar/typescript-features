class Vehicle {
    constructor(public color: string) {
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super('red');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color)

const car = new Car(4, 'red');
console.log(car.color)
