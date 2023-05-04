// Sukurti programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus".
//Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. 
//Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas".





function handleFormSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const didAgreeToGetLetter = document.getElementById('checked').checked;
    const outputElement = document.getElementById('output');
    outputElement.textContent = didAgreeToGetLetter ? `El. paštas ${email} sėkmingai užregistruotas` : 'Registracija nesėkminga';
  }
  
  document.querySelector('form').addEventListener('submit', handleFormSubmit);
  