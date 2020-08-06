// chiedere il nome e il sesso
var nome = prompt("Come ti chiami?");
var gender = prompt("Sei maschio o femmina?");

// azzurro se maschio rosa se è femmina
if (gender === "maschio") {
  document.getElementById('name').classList.add("blue");
}
else if (gender === "femmina"){
  document.getElementById('name').classList.add("pink");
}
else {
  alert("Ricontrolla i dati inserimento");
  document.getElementById('name').classList.add("display");
}

// controllo numeri
if (!isNaN(nome) || !isNaN(gender)){
  alert("Solo lettere!");
  document.getElementById('name').classList.add("display");
}

// stampa a video
document.getElementById('name').innerHTML = (" " + nome);
