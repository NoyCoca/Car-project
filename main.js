let carVolume = 0;
class Cars {
    wheels;
    engineCapacity;
    color;
    constructor(car, wheels, engineCapacity, color) {
        this.car = car;
        this.wheels = wheels;
        this.engineCapacity = engineCapacity;
        this.color = color;
    }
    getFullInfo() {
        return `the number of wheels is ${this.wheels}, the engine capacity is ${this.engineCapacity} and the color is ${this.color}  `
    }
    static engineVolume(carsArr) {
        let carEngine = 0;
        carsArr.forEach(car => {
            if (car.engineCapacity > carEngine) {
                carEngine = car.engineCapacity;
            }
        });
        return carsArr.filter(car => car.engineCapacity == carEngine)
    }
}
class PrivateCar extends Cars {
    getInfo() {
        return `${super.getFullInfo()}`
    }
    get Info() {
        return this.getInfo().toUpperCase();
    }
}
class Truck extends Cars {

    getInfo() {
        return `${super.getFullInfo()}`
    }
    get Info() {
        return this.getInfo().toUpperCase();
    }
}
class Motorcycle extends Cars {

    getInfo() {
        return `${super.getFullInfo()}`
    }
    get Info() {
        return this.getInfo().toUpperCase();
    }
}

function InfoFromUser() {
    let userCar;
    if (carsselect.value == "Motorcycle") {
        userCar = new Motorcycle(carname.value, wheels.value, engineCapacity.value, carcolor.value);

    }
    if (carsselect.value == "Truck") {
        userCar = new Truck(carname.value, wheels.value, engineCapacity.value, carcolor.value);

    }
    if (carsselect.value == "PrivateCar") {
        userCar = new PrivateCar(carname.value, wheels.value, engineCapacity.value, carcolor.value);

    }
    table.innerHTML += `<tr> <td>${carname.value}</td><td>${wheels.value}</td><td>${engineCapacity.value}</td><td>${carcolor.value}</td>
    <td>${carsselect.value}</td></tr>`
}


let car1 = new Motorcycle("T-MAX", 2, 1200, "black",);
let car2 = new Truck("Volvo", 4, 1500, "white",);
let car3 = new PrivateCar("mazda", 4, 1300, "purple");
let car4 = new PrivateCar("BMW", 4, 1100, "black");

console.log(car4.getInfo())

console.log(car2.Info);

let cars =  Cars.engineVolume([car1, car2, car3, car4])
console.log(cars);
