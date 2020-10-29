/*Escriba una función llamada onlyUniques que pueda aceptar cualquier número de argumentos 
y devuelva una matriz de solo los argumentos únicos.*/

function onlyUniques(...array)
{
    let uniques = [];
    let repetido = 0;
    for(numero of array){
        for(j=1; j<array.length; j++){    
            if (numero == array[j]){
               repetido++; 
            }
        }
        if (repetido == 0){
            uniques.push(numero);
        }
    }
    return (uniques);
}


console.log(onlyUniques ( 'gato' ,  'gato' ,  'perro' ,  'cerdo' )) ;  // ['gato', 'perro', 'cerdo'] 
console.log(onlyUniques ( 1 ,  4 ,  7 ,  1 ,  2 ,  7 ,  4 )) ;  // [1, 4, 7, 2]