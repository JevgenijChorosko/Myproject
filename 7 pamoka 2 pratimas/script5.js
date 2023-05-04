// Sukurti programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>. 
//Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. 
//List itemuose turi būti tavo vardas




function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const numberOfElements = Number(document.getElementById('numberOfElements').value);
    
    const list = document.getElementById('list');
    list.innerHTML = '';
    for (let i = 0; i < numberOfElements; i++) {
      const listItem = document.createElement('li');
      listItem.innerText = name;
      list.append(listItem);
    }
  }
  
  document.querySelector('form').addEventListener('submit', handleFormSubmit);