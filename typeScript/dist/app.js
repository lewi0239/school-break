"use strict";
let carsLists = []; // Array to store Car objects
class Car {
    // Constructor to initialize the class
    constructor(model, year, price, color) {
        this.model = model;
        this.year = year;
        this.price = price;
        this.color = color;
        Car.numberOfCars++; // Increment the number of cars each time a car is created
        carsLists.push(this); // Add the current Car object to the carsLists array
    }
    drive() {
        console.log(`${this.color} ${this.model} has started driving`);
    }
    stop() {
        console.log(`${this.model} has stopped`);
    }
    static getNumberOfCars() {
        return Car.numberOfCars; // Return the total number of cars
    }
}
Car.numberOfCars = 0; // Static property to count cars
// Example of using the Car class
const myCar1 = new Car("Toyota Corolla", 2020, 20000, "red");
const myCar2 = new Car("Tesla Model 3", 2022, 40000, "blue");
const myCar3 = new Car("Ford Mustang", 2021, 30000, "black");
myCar1.drive(); // Output: red Toyota Corolla has started driving
myCar1.stop(); // Output: Toyota Corolla has stopped
console.log(`Number of cars: ${Car.getNumberOfCars()}`); // Output: Number of cars: 3
// Now carsLists contains full Car objects
console.log(carsLists);
// Declare myPortfolio to store Stock instances
let myPortfolio = [];
let myPortfolioCached = [];
class Stock {
    constructor(stockSymbol, stockPrice, sector) {
        this.stockSymbol = "";
        this.stockPrice = 0;
        this.sector = "No Sector Assigned";
        this.stockSymbol = stockSymbol; // Fix variable names here
        this.stockPrice = stockPrice;
        this.sector = sector;
        Stock.stockPortfolio++; // Increment static property
        myPortfolio.push(this); // Add the new stock to myPortfolio array
    }
    // Static method to get the number of stocks
    static getNumberOfStocks() {
        return Stock.stockPortfolio;
    }
}
Stock.stockPortfolio = 0; // Static property to count number of stocks
// Create instances of Stock
let stock1 = new Stock("ABC", 99, "Marketing");
let stock2 = new Stock("Microlame", 919, "Tech");
let stock3 = new Stock("Bank of America", 399, "Banking");
// Output portfolio and number of stocks
console.log(myPortfolio);
/* Output:
[
  Stock { stockSymbol: 'ABC', stockPrice: 99, sector: 'Marketing' },
  Stock { stockSymbol: 'Microlame', stockPrice: 919, sector: 'Tech' },
  Stock { stockSymbol: 'Bank of America', stockPrice: 399, sector: 'Banking' }
]
*/
console.log(`Number of stocks in portfolio: ${Stock.getNumberOfStocks()}`);
// Output: Number of stocks in portfolio: 3
class FinancialPlan {
    constructor() {
        this.clientFirstName = "";
        this.clientLastName = "";
        this.clientFullName = this.clientFirstName + this.clientLastName;
        this.clientAddress = "Canada Street";
        this.phoneNumber = "6131234567";
        this.taxAdvisor = "Mr. Myplan Tax";
        this.financialPlanner = "Ms. Myplan Planner";
        this.snn = 0;
        this.bank = "";
    }
}