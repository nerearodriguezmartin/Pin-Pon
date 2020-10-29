var edad = parseInt(prompt("Introduce un número"));
var ciudad = prompt("Introduce tu localidad de nacimiento");

if(edad>=25 && ciudad == "Madrid")
    document.write("ENHORABUENA");
else
    document.write(ciudad);