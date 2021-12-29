// Se pide al usuario que ingrese temperatura a convertir. Luego se convierte cadena a numero.
var input = prompt("Ingresa la temperatura en Celsius (°C) que deseas convertir");
var input = parseInt(input);

// Con la data del input se realizan las operaciones (Se determinan dos decimales máximo).
var kelvin = input + 273.15;
var farenheit = (input * 9/5) + 32;
var farenheit = farenheit.toFixed(2);

// Se escribe texto en el documento, entrengado los resultados de las operaciones con el input del usuario.
if(isNaN(input)){
    alert("Debes ingresar un número.")
}
else {
var celsius = document.getElementById("celsius")
celsius.innerHTML = "La temperatura ingresada de <b>" + input + "°C</b>:"

var pkelvin = document.getElementById("kelvin");
pkelvin.innerHTML =  "Corresponde a <b>" + kelvin + " °K</b>.";

var pfarenheit = document.getElementById("farenheit");
pfarenheit.innerHTML = "Y corresponde a <b>" + farenheit + " °F</b>.";
}
