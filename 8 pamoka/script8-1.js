// Sukurkite funkciją, į kurią būtų paduotas vietas parametras - n. Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš daug mažų L raidžių).
// t.y. jei kviesite funkciją fn(4), tai turėtų atspausdinti tokį rezultatą:


function drawL(event) {
    const size = Number(event.target.value);
    const outputElement = document.getElementById('output');
  
    let output = '';
    for (i = 0; i < size - 1; i++) {
      output += 'L<br>';
    }
    for (i = 0; i < size; i++) {
      output += 'L'
    }
    outputElement.innerHTML = output; 
  }
  
  document.getElementById('size').addEventListener('input', drawL)
  