// chiedere il nome e il sesso

var nome = prompt("Come ti chiami?");
var gender = prompt("Sei maschio o femmina?");

// azzurro se maschio rosa se è femmina


if (gender === "maschio" || gender === "femmina"){
  document.getElementById("name").innerHTML = ( " "+ nome );
}
 else{
  alert("immettere il sesso");
}


if (isNaN( nome )){
  document.getElementById('name').innerHTML = (" " + nome );
}
else (!isNaN( nome )){
  alert("immettere il nome");
}
