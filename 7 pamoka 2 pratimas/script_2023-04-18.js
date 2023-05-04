
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

}
class Motorcycle extends Vehicle {
    constructor(make, model, year, numWhels, hasHelmet) {
        ;
        super(make, model, year);
        this.numWheels = Numer(numWheels);
        this.hasHelmet = Boolean(hasHelmet);
        ride() {
            console.log(this.make + " " + this.model + " " + this.year + "juda miskais");
        }

    }
    class Car extends Vehicle {
    constructor(make, model, year, numDoors, numSeats);
    super(make, model, year);
    this.numWheels = Number(numWheels);
this.numSeats = Number(numSeats);
start() {
    console.log(this.make + " " + this.model + " " + this.year + "juda miskais");
}
    }



const Motorcycle = new Motorcycle([`2022`], [`Make`], [`Yamaha`], [juda miskais])
console.log(Motorcycle);

const Car = new Car([`2019`], [`AUDI`], [`A4`], [pradejo vaziuoti])
console.log(Car);





// make - Stringas// model - Stringas// year - Numeris// Metodus // - start - console.log "[Year] [Make] [Model] užsikūrė"
// Sukurti extendintą (child) klasę - Car - su propsais:// - numDoors - Numeris// - numSeats - Numeris// Metodus:// - drive - console.log "[Year] [Make] [Model] pradėjo važiuoti"
// Sukurti dar vieną extendintą klasę - Motorcycle - su propsais:// - numWheels - Numeris// - hasHelmet - boolean// Metodus:// - ride - console.log "[Year] [Make] [Model] juda miškais"
// Sukurti Car ir Motorcycle instancus, iškviesti start(), drive(), ride();// Užduotis apibendrinus
//(Galite kurti ne nurodytą programą, tačiau kitokį principą, svarbu kad būtų Vehicles klase ir dvi klasės kurios extendinasi iš vehicle)
// Ir iškvietus metodą start (išsikviestų iš originalios klases) kiti metodai drive ir ride, išsikviestų iš sub klasių.
// Pirminė klasė su pradiniais metodais, kintamaisiais

