var edad = prompt("Introduzca su edad");

if(edad <= 5)
    document.write("Debe estar en el jardín de infancia");

else if(edad >= 6 && edad <= 11)
    document.write("Debes estar en primaria");

else if(edad >=12 && edad <=16)
    document.write("Debes estar en la ESO");

else if(edad >=17 && edad <=21)
    document.write("Debes estar en Bachillerato o ciclo formativo");

else if(edad >21)
    document.write("Debes estar en la universidad");

