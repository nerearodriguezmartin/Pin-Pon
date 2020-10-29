/*Escribir  una  función  llamada  `countTheArgs`  que  puede  tomar  cualquier  número  
de  argumentos ,  y  devuelve  el  número  de  argumentos  que  se  pasan  en . */
function countTheArgs(...arrayArgs)
{
    return arrayArgs.length;
}




console.log(countTheArgs ( 'gato' ,  'perro' )) ;  // 2 
console.log(countTheArgs ( 'gato' ,  'perro' ,  'rana' ,  'oso' )) ;  // 4
