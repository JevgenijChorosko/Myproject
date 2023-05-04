// Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
Pvz: fn(3) => '180 seconds'


const function = (3) => 3 * 60 + 'seconds';




//Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
Pvz: fn(20) => 7300.

const function = (20) => "20 * 365";

//Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
Pvz.: fn(5) -> 25

const function = 5 **2;

//Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
Pvz: fn(10, 10) -> 50

const fn = (10, 10) => 10 * 10 / 2;

//Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
pvz. Paduodu: "Petras", grąžina "s".

const fn = (Petras) => Text.charAt(text.lenghth -1);

//Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
T.y. "Petras" -> "sartep"

const fn = (Petras) =>text.split("").reverse().join("").toLowerCase();

//Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
pvz: [-1, -100, -5, 10, 0, 11] -> "-1"

const fn = (-1, -100, -5, 10, 0, 11) => nums.filter(x => x < 0).sort((a.b) => b - a)[0];

//Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
T.y. "3" => [1, 6, 3].

const randomNumbers = (1, 6, 3) => {
    const generatedNums - [];
    for(let i=0; i < quant; i++)}
    generatedNums.push(Math.floor(Math.random()*10) +1){
        return generatedNums;
    }

//Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
Pvz.: fn(10, 50) -> true

const sumOverHundres = (10, 50) => 50 + 50 > 100;



//Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]

const fn = (array) => array.sort ((a, b)=> a.mame > b.name ? 1 : -1).sort((a,b) => a.age - b.age);

//Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
Pvz.: fn(new Date(2020, 12, 25)) -> true
function isItHolliday (date) {
    const holidays = ["2020-12-25"];
    return holidays.some(holiday => (new Date(holiday)).getDate() === date.getDate())
}

console.log(isItHoliday(new Date("202-12-25")))

//Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3

const missingNumber = (1, 2, 4, 5) => array.find((x, i) => x + 1!== array [i+1]) + 1;






// <!-- Papildoma užduotis Sukurti TODO tvarkyklę. 
// TODO tvarkyklei, reikalingi: 
// - TODO pridėjimas
// - TODO trinimas
// - TODO pažymėjimas kaip įvygdyta.
// - Atvaizduoti visus TODO.
// Žingsniai. 
// Sukurti tuščią array, "todo"Sukurkite fuknciją pavadinimu "addTODO"
// Sukurti fuknciją pavadinimu "deleteTODO"
// Sukurti funckiją pavadinimu - "markAsDone"
// Sukurti funkciją "displayTODO"
// HTMLe turėtų būti input'as ir submit mygtukas, kur prirašius pavadinimą, pridėtų prie sąrašo.
// Formai pridėti eventą, kuris pridetų (pushintų) naują TODO į sąrašą.
// - Pridedant tapatį pavadinimą, turėtų mesti klaidą
// - Vedant tuščią pavadinima, taip pat mestų klaidąHTML 
// Taip pat turėtų būti automatinis atvaizdavimas sąrašo. 
// Kitaip tariant, po kiekvieno užduoties pavadinimo, 
// HTML atvaizdavimas turėtų ištrintisenus rezultatus ir pridėti naujus HTML'e.
// (Turint atskirą displayTODO fuknciją, turėtų būti, gan paprasta)
// Kiekvienas sąrašo elementas turėtų turėti checkboxą, 
// kurį paspaudus pakeistų statusąį "done" ar altikta,
//  ar completed: truePvyzdinė array objekto struktūra - const todo = [ { name: 'Some todo', completed: false, }, { name: 'Some other todo', completed: true, }] 
// Taip pat, keikvienas elementas turėtų tūrėti, mygtuką su value - x - kurią paspaudus,išmestų iš sąrašo paspaustą elementą. -->