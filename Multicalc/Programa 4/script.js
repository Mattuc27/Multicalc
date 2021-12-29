// Le damos instrucción al usuario.
alert("Hola, ingresa 5 numeros para sumarlos y sacar el promedio")

// Le pedimos que ingrese los números y los convertimos a número.
var num1 = prompt("Ingresa el primer número","5")
var num1 = parseInt(num1)
var num2 = prompt("Ingresa el segundo número","8")
var num2 = parseInt(num2)
var num3 = prompt("Ingresa el tercer número","9")
var num3 = parseInt(num3)
var num4 = prompt("Ingresa el cuarto número","2")
var num4 = parseInt(num4)
var num5 = prompt("Ingresa el quinto número","9")
var num5 = parseInt(num5)

// Hacemos la operación requerida.
var suma = num1 + num2 + num3 + num4 + num5;
var prom = suma / 5;
var prom = prom.toFixed(2);

// Obtenemos los elementos HTML para sobreescribirlos.
var n1 = document.getElementById("num1")
n1.innerText = num1
var n2 = document.getElementById("num2")
n2.innerText = num2
var n3 = document.getElementById("num3")
n3.innerText = num3
var n4 = document.getElementById("num4")
n4.innerText = num4
var n5 = document.getElementById("num5")
n5.innerText = num5

// Mostramos los resultados de las operaciones anteriores.
var result = document.getElementById("resultado");
result.innerHTML = "La suma de los numeros ingresados es: <b>" + suma + "</b> y el promedio es: <b>" + prom + "</b>."