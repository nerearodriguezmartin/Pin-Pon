var a = parseInt(prompt("Introduce el valor de a"));
var b = parseInt(prompt("Introduce el valor de b"));
var c = parseInt(prompt("Introduce el valor de c"));

var positivo = parseInt((-b+(Math.sqrt(Math.pow(b, 2)-(4*a*c))))/(2*a));
var negativo = parseInt((-b-(Math.sqrt(Math.pow(b, 2)-(4*a*c))))/(2*a));

document.write("x = " + positivo);
document.write("<br>x = " + negativo);


