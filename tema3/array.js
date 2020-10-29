var nombres = ["jose", 3, "hugo"];
//tambien se puede hacer llamando a new

var nombres = new Array("jose", 3, "hugo");
console.log(nombres[1]);


// para saber el numero de elementos
console.log(nombres.length);

// para recorrer un array
let colors = ['red', 'green', 'blue']
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// usando el for of

for (color of colores){
    console.log(color);
}

//forEach() --> es un método el array que para cada uno de los elementos, en este caso lo escribe en la consola
let colors = ['red', 'green', 'blue']
colors.forEach(function(color) {
  console.log(color)
})
// red
// green
// blue


// lo mismo con la funcion arrow
let colors = ['red', 'green', 'blue']
colors.forEach(color => console.log(color))
// red
// green
// blue

// el metodo push() te pone el elemento en la ultima posicion
let myarray = new Array('1', '2');
myarray.push('3');


//el metodo pup() te quita el elemento de ultima posicion
myarray.pop();


//sort ordena los valores del array, si son numericos los pone en orden
// y si son cadenas, las ordena alfabeticamente
let myArray = new Array('Wind', 'Rain', 'Fire')
myArray.sort()
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]