document.write("Número aleatorio entre 0 y 1: " + Math.random());
document.write("<br>Número aleatorio entre 100 y 200: " + getRandom(100, 200));

function getRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
    /*de esta forma estamos excluyendo el máximo y el mínimo*/
}

let min = prompt ("Introduce el valor mínimo");
let max = prompt ("Introduce el valor máximo");

document.write("<br>Número aleatorio entre " + min +" y " + max + " : " + getRandom(min, max));
