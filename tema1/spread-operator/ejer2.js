/*Escriba una función llamada addOnlyNums
que pueda aceptar cualquier número de argumentos (incluidos números o cadenas) 
y devuelva la suma de solo los números.*/ 

function addOnlyNums(...array)
{
    let totalFun=0;
    for(numero of array){
        if (typeof(numero)=='number') // typeof me devuelve el tipo de dato
            totalFun += numero;

    }
    return("El resultado de la suma es:"+totalFun);
}

document.write(addOnlyNums ( 1 ,  'gato' ,  3 ,  4 ));