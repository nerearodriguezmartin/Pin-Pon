/*Escribe una función llamada squareAndSum que tome cualquier número de argumentos, los cuadre y luego sume todos los cuadrados.*/
function sumAndSquare(...array){
    let suma = 0;
    for (numero of array){
        numero = Math.pow(numero, 2);
        suma += numero;
    }
    return suma;
    
}

console.log(sumAndSquare ( 2 ,  4 ,  3 )) ;  // 29 
console.log(sumAndSquare ( 1 ,  2 )) ;  // 5