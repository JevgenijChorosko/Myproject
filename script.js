function fetchData(url, callback) => {}
    fetch(url)
    .then(response => response.json())
    .then(array =>) {
        callback(array)
    }
function renderExperiencies(experiences) => {
    const div 
}

fetchData(
  "https://zany-skitter-caper.glitch.me/experiences",
  renderExperiencies
);


// // function renderExperiences(experiences) {
//     const main = document.querySelector("main");
//     const ul = document.createElement("ul");
//     experiences.forEach(el => {
//         const li = document.createElement("li");
//         li.textContent = `${el.companyName} - ${el.position}`;
//         ul.appendChild(li);
//     });
//     main.appendChild(ul);
// }