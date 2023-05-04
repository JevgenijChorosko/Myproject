// Sukurti input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input (t.y. blur event), vardas atsiras po apačia, tvarkingame sąraše (su kableliais):
//Pvz.: Petras, Jonas, Mantas, Antanas.






function addNameToList(event) {
    const name = event.target.value.trim();
    const outputElement = document.getElementById('output');
    if (name) {
      outputElement.innerText += `${name}, `;
    }
  }
  
  document.getElementById('name').addEventListener('blur', addNameToList);