//funciones
function suma(num1, num2, num3){
    return num1+num2+num3;
}

var miArray = [3 , 29, 33];
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arrayTodos = [...arr1, ...arr2, ...miArray]; // nos hace un array con todos los elementos de cada array en el orden en el que le indicamos

var total = suma( ...miArray); // operador de propagación: saca los elementos del array y los propaga, los convierte en elementos individuales sin que tengamos que hacer nada
console.log(total);

//REST
function suma(...numerosArray) // me convierte todos los elementos que le pase en un array
{
    let totalFun=0;
    for(numero of numerosArray)
        totalFun += numero;
    return totalFun;
}

var total = suma(4, 8, 9, 2, 3) //le paso todos los elementos que quiera a la función, y los convierte todos en un array

/*otra forma de hacerlo*/
let otroArray = [4, 8, 9, 2, 3];
var total = suma(...otroArray);
// lo que estaría haciendo
var total = suma(4, 8, 9, 2, 3);

// valor, si no le doy ningún valor, toma como valor el del primer elemento
