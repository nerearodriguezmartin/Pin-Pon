/*Escriba una función llamada sumEveryOther que tome cualquier cantidad de argumentos y devuelva la suma de todos los demás argumentos.*/

function sumEveryOther(...array)
{
    totalFun=0;
    for(i=0; i<array.length; i++){
        if (i%2 == 0)
            totalFun += array[i];
    }
    return totalFun;
}

console.log(sumEveryOther ( 5 ,  6 ,  3 ,  4 ,  1 )) ;  // 9 
console.log(sumEveryOther ( 10 ,  2 ,  11 )) ;  // 21 