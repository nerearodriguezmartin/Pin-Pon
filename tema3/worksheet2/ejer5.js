/*function paresImpares(){
    let arr = new Array();
    for (var i=0; i<100; i++){
        arr.push(parseInt(Math.random()*(1001-1)+1));
    }
    return arr;
}

function ordena(arr){
    for(var i = 0; i<arr.length; i++){
        if(arr[i]%2 == 0){
            let num = arr[i];
            arr.slice(i);
            arr.unshift(num);
        }
        else{
            let num = arr[i];
            arr.slice(i);
            arr.push(num);
        }
    }
}*/

function paresImpares(){
    var pares = Array();
    var impares = Array();
    // Llenamos el array de números aleatorios
    myArray =Array(100).fill().map(() => lanzamiento(1,1000))
    
    // Seleccionamos según par o impar
    myArray.forEach( valor => {
        if (valor%2 == 0)
          pares.push(valor);
        else  
          impares.push(valor);
    });
    return pares.concat(impares);
  
  }


let arr = paresImpares();
let ordenado = ordena(arr);

console.log("array: ");
arr.forEach(function(arg){
    console.log(arg)
})

console.log("array odenado: ");
ordenado.forEach(function(args){
    console.log(args)
})