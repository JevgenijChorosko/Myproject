// Sukuti formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. Po forma - tegul būna tusčias div elementas.
 //Jame reikia atvaizduoi trikampį pagal įvestą input. Šis pratimas - klasika programavimo ciklų srityje, tiek atsakymų, tiek teorijų,
//tiek sąmokslo teorijų internete - daugiau nei reikia; pasibaigus ar pastrigus - būtinai pasinagrinėkite





function drawTriangle(event) {
    event.preventDefault();
    let triangleSize = Number(document.getElementById('triangleSize').value);
    const outputElement = document.getElementById('output');
  
    let output = '';
    for (i = 0; i < triangleSize; i++) { 
      for (j = 0; j <= i; j++) {
        output += "*";
      }
      output += "<br>";
      outputElement.innerHTML = output;
    }
  }
  
  document.querySelector('form').addEventListener('submit', drawTriangle);
  