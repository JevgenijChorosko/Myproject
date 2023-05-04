// Susikurti konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. 
//Sukurkite du objektus ir patikrinkite ar veikia.//

function Car = (brand, model, engine,){
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.introduce = function(){
        alert("vroom")
    }
}
