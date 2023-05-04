// // Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes, veikia!".
// // Pažado aprašyme teks naudoti setTimeOut

// const pazadas = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), 5000)
//   })

//   pazadas.then(() => alert("Veikia"));

//   console.log("Šitas kodas pasileis pirmas, nors ir yra paskutinis. Tai būtent mūsų asinchroniškumas")

// // Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

// const pazadas = new Promise((resolve, reject) => {
//     const random = Math.floor(Math.random() * 5) + 1;

//     setTimeout(() => {
//       if(random === 1){
//         reject();
//       }
//       else{
//         resolve();
//       }
//     }, 5000)
//   })

//   pazadas
//     .then(() => alert("Veikia"))
//     .catch(() => alert("Oops, pažadas buvo atmestas"))

// // Then bendrauja su kitu then.
// // Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas - pasileidžia then(),
// // kuris paprasčiausiai grąžina žinutę "this is a message", šią žinutę pagauna antrasis then() ir ją alertina.
// // Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip parametrą.

// onst pazadas = new Promise((resolve, reject) => {
//     const random = Math.floor(Math.random() * 5) + 1;

//     setTimeout(() => {
//       if(random === 1){
//         reject();
//       }
//       else{
//         resolve();
//       }
//     }, 5000)
//   })

//   pazadas
//     .then(() => "This is message")
//     .then((message) => alert(message))
//     .catch(() => alert("atmestas"))>

async function generateRandomNumber() {
  const numbers = [4, 8, 9, 10, 1];
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const randomNumber = numbers[Math.floor(Math.random() * numbers.lenth)];
    console.log(randomNumber);
  }
}
