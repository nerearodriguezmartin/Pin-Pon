// EJERCICIO 5
function lanzamiento(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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


// EJERCICIO 7

// VERSION 1

function ponerACero(array){
  for(let i = 0; i < 10; i++){
      array[i] = 0;
  }
  return array;
}

function sumaUno(array){
  for(let i = 0; i < array.length; i++){
      array[i]=array[i]+1;
  }
  return array;
}

// VERSION 2

function ponerACero_2(array){
  return array.map( el => el=0 );
}

function sumaUno_2(array){
  return array.map( el => el=el++ );
}

// Apartado c)

function separarConEspacios(array){
  return array.join(" ");
}


// EJERCICIO 9

function ejercicio9()
{
  let combinaciones = Array(6).fill(0).map( () => Array(6).fill(0))
  let dado1, dado2;

  for(var i=0;i<36000;i++){
    dado1 = lanzamiento(1,6);
    dado2 = lanzamiento(1,6);
    combinaciones[dado1-1][dado2-1]++;
  }
  return combinaciones;
}
