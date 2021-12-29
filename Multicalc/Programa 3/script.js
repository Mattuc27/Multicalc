// Se le pide al usuario que ingrese cantidad de días.
var input = prompt("Ingresa una cantidad de días", "373");
var input = parseInt(input);

// Se imprime en documento cantidad de días ingresada.
var num = document.getElementById("input");
num.innerHTML = "Ingresaste <b>" + input + "</b> días."

// Calculos
// Se calcula los años equivalentes al input ingresado.
var años = input / 365;
var años = Math.floor(años);

// Semanas equivalentes a los días ingresados y se resta la cantidad de semanas según los años correspondientes (para que entregue el restante de semanas).
var semanas = input / 7;
var semanas = Math.floor(semanas);
var semanas = semanas - (años * 52);

// Se calculan los días restantes, restando la cantidad de años y semanas (Se utiliza Math.abs para mostrar valor absoluto en caso que resultado de negativo).
var dias = input - (años * 365);
var dias = dias - (semanas * 7);
var dias = Math.abs(dias)

// Para mostrar el texto correspondiente segun la cantidad de años, semanas, dia.
if(años<=1){
    var saño = " año, "
}
else{
    var saño = " años, "
}

if(semanas<=1){
    var ssemana = " semana y "
}
else{ 
    var ssemana = " semanas y "
}

if(dias<=1){
    var sdia = " día."
} 
else{
    var sdia = " días."
}

var resul = document.getElementById("parrafito");
resul.innerHTML = "La cantidad de días ingresado equivale a <b>" + años + saño + semanas + ssemana + dias + sdia + "</b>"



