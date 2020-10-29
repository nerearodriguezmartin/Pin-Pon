var radio = prompt("Introduce el valor del radio"); //pedimos el radio por teclado y lo guardamos en la variable radio
calcCircumfrence(radio);
calcArea(radio);



function calcCircumfrence(radio){
    var circunferencia = 2*radio*Math.PI;

    alert("La circunferencia es: " + circunferencia);

}

function calcArea(radio){
    var area = Math.pow(radio, 2)*Math.PI;

    alert("El area es: " +area);
}