let carVolume = 0;
class cars {
    wheels;
    engineCapacity;
    color;
    static counter= 0;
    constructor(carName, wheels, engineCapacity, color) {
        this.carName = carName;
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
        if (car.engineCapacity > carEngine){
            carEngine = car.engineCapacity ;
        }        
    });
    return carsArr.find(car=> car.engineCapacity == carEngine)
}}
class PrivateCar extends cars {
    getInfo() {
        return `${super.getFullInfo()}`
    }
    get Info() {
        return this.getInfo().toUpperCase();
    }
    static counterPrivateCar= 0;

}
class Truck extends cars {
    
    getInfo() {
        return `${super.getFullInfo()}`
    }
    get Info() {
        return this.getInfo().toUpperCase();
    }
}
class Motorcycle extends cars {
  
    getInfo() {
        return `${super.getFullInfo()}`
    }
    get Info() {
        return this.getInfo().toUpperCase();
    }
}

let car1 = new Motorcycle( "mazda",3, 455, "pink", );
let car2 = new Truck("mazda", 3, 45, "pink", );
let car3 = new PrivateCar( "mazda",3, 4455, "pink");
let car4 = new PrivateCar("mazda" ,3, 445555, "pink");

console.log(cars.engineVolume([car1, car2, car3]));

function InfoFromUser() {
    let userCar;
    if (carsselect.value == "Motorcycle") {
        userCar = new Motorcycle(carname.value, wheels.value, engineCapacity.value, carcolor.value);
        cars.counter ++;
        }
    if (carsselect.value == "Truck") {
        userCar = new Truck(carname.value, wheels.value, engineCapacity.value, carcolor.value);
        cars.counter ++;
    }
    if (carsselect.value == "PrivateCar") {
        userCar = new PrivateCar( carname.value, wheels.value, engineCapacity.value, carcolor.value);
        cars.counter ++;
        PrivateCar.counterPrivateCar++;
    }
    
    table.innerHTML += `<tr id = "${userCar.carName}${cars.counter}"></tr>`;
    
    const orderFieldsConfig = ["carName", "wheels", "engineCapacity", "color"];

    for (const key of orderFieldsConfig) {
        document.getElementById(`${userCar.carName}${cars.counter}`).innerHTML += `<td>${userCar[key]} </td>`;
    }
    document.getElementById(`${userCar.carName}${cars.counter}`).innerHTML += `<td>${carsselect.value} </td>`;

}

