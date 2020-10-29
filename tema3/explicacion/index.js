// puedo definir una funcion mediante un nombre
function cuadrado(numero){
        console.log(arguments);
        return numero*numero;
        //arguments[0]*arguments[0] (es lo mismo que numero*numero)

        /**/
}

miValor=3;
var result = cuadrado(miValor);
console.log(result + " mi valor= "+ miValor);


// definicion anónima, es como si se llamara f
var cuadrado = function (numero){
    numero =10;
        return numero*numero;
}

var result=cuadrado(); // asi me da un error al no pasarle nada
// para solucionarlo, le damos un paramentro por defecto, en este caso
// si no le pasamos nada su valor sera 0
function cuadrado(numero = 0){

    return numero*numero;

}

// podemos usar la funcion arrow
var a2 = a.map(function(s) { return s.length; });

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map(s => s.length); // es lo mismo que var a2

console.log(a3); // logs [8, 6, 7, 9] 

