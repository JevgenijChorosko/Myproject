// Susikurti konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'.
//Sukurkite du objektus ir patikrinkite ar veikia.//

//Pakoreguoti šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą,
//tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina.
//Jei variklis 'electric' - kaina bus +10,000;
//jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

function Car(brand, model, engine, price) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
  this.basePrice = price;

  this.getPrice = function () {
    let additionalPrice = 0;
    if (this.engine === "electric") {
      additionalPrice = 10000;
    } else if (this.engine === "diesel") {
      additionalPrice = 5000;
    } else if (this.model === "BMW") {
      additionalPrice = 25000;
    }
    return this.basePrice + additionalPrice;
  };

  this.turnOn = function () {
    alert("vroom");
  };
}

const realCar = new Car("AUDI", "A6", "electric", 30000);
const realCar1 = new Car("BMW", "116", "electric", 45000);
const realCar2 = new Car("VW", "Golf", "petrol", 28000);

console.log(realCar.getPrice());
console.log(realCar1.getPrice());
console.log(realCar2.getPrice());

// const muRegex = new RegExp(/^[]/i)
// const myString = "Petras123"

// myString.match(myRegex)
