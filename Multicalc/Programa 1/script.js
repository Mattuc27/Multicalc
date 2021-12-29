// Usuario ingresa numeros.
var num1 = prompt("Hola, ingresa un numero (mayor o igual a 0)", "5");
var num2 = prompt("Ingresa otro numero (mayor o igual a 0)", "7");

// Se transforma cadena ingresada por usuario a número.
var num1 = parseInt(num1);
var num2 = parseInt(num2);

// Se trae elementos del documento HTML para identificar donde mostrar la operación.
var input = document.getElementById("numeros");
var suma = document.getElementById("Suma");
var resta = document.getElementById("Resta");
var mult = document.getElementById("Multiplicacion");
var div = document.getElementById("Division");
var mod = document.getElementById("Modulo");

// Para mostrar máximo 2 decimales en la división se crea la variable div1.
var div1 = num1 / num2;
var div1 = div1.toFixed(2);

// Se escribe el resultado de la operación en el documento HTML.
input.innerHTML = "Numero 1: <b>" + num1 + "</b><br> Número 2: <b>" + num2 + "</b>";
suma.innerText = num1 + num2;
resta.innerText = num1 - num2; 
mult.innerText = num1 * num2;
div.innerText = div1;
mod.innerText = num1 % num2;