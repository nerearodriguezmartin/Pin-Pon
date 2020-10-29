function ponCero(arr){

    for (let i = 0; i<10; i++){
        arr[i] = 0;
    }
    return arr;
}

function añadeUno(arr){
    for (let i = 0; i<10; i++){
        arr[i] = arr[i]+1;
    }
    return arr;
}

function muestra(arr){
    return arr.join(' ');
}

// VERSION 2

/*function ponerACero_2(array){
    return array.map( el => el=0 );
  }
  
  function sumaUno_2(array){
    return array.map( el => el=el++ );
  }*/

let array = new Array ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10');
array.forEach(function(element) {
    console.log(element)
  })

let cero = ponCero(array);
cero.forEach(function(element) {
    console.log(element)
  })

  let masUno = añadeUno(array);
  masUno.forEach(function(element) {
    console.log(element)
  })

  console.log(muestra(array));