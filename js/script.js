// chiedere il nome e il sesso

var nome = prompt("Come ti chiami?");
var gender = prompt("Sei maschio o femmina?");

// azzurro se maschio rosa se è femmina


// var answer = nome + gender;

if (gender === "maschio" || gender === "femmina") {
  document.getElementById("name").innerHTML = ( " "+ nome );

}
else if{
  alert("immettere il sesso");
}
