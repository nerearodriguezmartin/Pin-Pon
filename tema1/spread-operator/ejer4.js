/*Escriba una función llamada combineTwoArrays que tome dos matrices como argumentos 
y devuelva una única matriz que combine ambas (usando el operador de extensión).*/

function combineTwoArrays(arr1, arr2)
{
    let arrayTodos = [...arr1, ...arr2];
    return arrayTodos;
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log(combineTwoArrays(arr1, arr2));