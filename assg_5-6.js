class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    honk() {
        console.log('Tuut tuut');
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: ${this.price}`);
    }

    race(turns) {
        for (let i = 1; i <= turns; i++) {
            this.consumeGas();
            console.log(`Turn ${i}: ${this.brand} - Gas Remaining: ${this.gas} litres`);
        }
    }

    consumeGas() {
        const newCarGasLoss = 5;
        const olderCarGasLoss = 1;

        // gas loss based on car age
        const ageDifference = new Date().getFullYear() - this.year;
        const gasLoss = ageDifference > 0 ? newCarGasLoss + (olderCarGasLoss * ageDifference) : newCarGasLoss;

        // reduce gas based on calculated gas loss
        this.gas -= gasLoss;

        // gas should not go below 0
        this.gas = Math.max(0, this.gas);
    }
}

// initialize car objects
const car1 = new Car('Honda', 'CR-V', 2023, 'Red', 50000, 45);
const car2 = new Car('Ford', 'F-150', 2020, 'Black', 25000, 30);
const car3 = new Car('BMW', 'X5', 2022, 'Green', 60000, 65);
const car4 = new Car('Mazda', 'CX-5', 2019, 'White', 15000, 60);
const car5 = new Car('Audi', 'Q7', 2018, 'Silver', 52000, 47);
const car6 = new Car('Kia', 'Forte', 2020, 'Blue', 21000, 56);

// call honk method for each car
car1.honk();
car2.honk();
car3.honk();
car4.honk();
car5.honk();
car6.honk();

// simulate race
const raceTurns = 7;
console.log('\nRace Simulation:');
car1.race(raceTurns);
car2.race(raceTurns);
car3.race(raceTurns);
car4.race(raceTurns);
car5.race(raceTurns);
car6.race(raceTurns);
