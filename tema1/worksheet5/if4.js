var hermanos = prompt("Introduzca su número de hermanos");
var numero = prompt("Introduzca una cantidad");

if (hermanos >= 3)
    document.write("Se le hace un descuento del 15%: "+numero*85/100);
else if (hermanos < 3)
    document.write("Se le hace un descuento del 5%: "+numero*95/100);
else if (hermanos == 0)
    document.write("No se le aplica descuento: "+numero);