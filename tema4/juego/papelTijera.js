import {Juego} from './papelTijeraClases.js';

window.onload = function(){
    document.getElementById("piedra").addEventListener("click", piedra);
    document.getElementById("papel").addEventListener("click", papel);
    document.getElementById("tijera").addEventListener("click", tijera);

}

var empate = document.createTextNode("Ha habido un empate");
var victoria = document.createTextNode("Enhorabuena!! Has ganado!");
var derrota = document.createTextNode("Has perdido");

// piedra es 1, papel es 2, tijera es 3

function piedra(){
    document.getElementById("imagenJugador").src = "piedra.jpg";

    document.getElementById('resultado').nodeValue = "";


    var myJuego = new Juego(1);
    if (myJuego.odenador == 1){
       
        document.getElementById("imagenOrdenador").src = "piedra.jpg";
        document.getElementById("resultado").textContent="EMPATE";
        document.body.style.backgroundColor="#FFF2C5";
    }
    else if (myJuego.odenador == 2){
        
        document.getElementById("imagenOrdenador").src = "papel.jpg";
        document.getElementById("resultado").textContent="PERDISTE";
        document.body.style.backgroundColor="red";
    }
    else if (myJuego.odenador == 3){

        document.getElementById("imagenOrdenador").src = "tijera.jpg";
        document.getElementById("resultado").textContent="HAS GANADDO";
        document.body.style.backgroundColor="green";
    }
}

function papel(){
    document.getElementById("imagenJugador").src = "papel.jpg";

    var myJuego = new Juego(2);
    if (myJuego.odenador == 1){

        document.getElementById("imagenOrdenador").src = "piedra.jpg";
        document.getElementById("resultado").textContent="HAS GANADDO";
        document.body.style.backgroundColor="green";
    }
    else if (myJuego.odenador == 2){

        document.getElementById("imagenOrdenador").src = "papel.jpg";
        document.getElementById("resultado").textContent="EMPATE";
        document.body.style.backgroundColor="#FFF2C5";
    }
    else if (myJuego.odenador == 3){

        document.getElementById("imagenOrdenador").src = "tijera.jpg";
        document.getElementById("resultado").textContent="PERDISTE";
        document.body.style.backgroundColor="red";
    }
}

function tijera(){
    document.getElementById("imagenJugador").src = "tijera.jpg";
    var myJuego = new Juego(3);
    if (myJuego.odenador == 1){
        
        document.getElementById("imagenOrdenador").src = "piedra.jpg";
        document.getElementById("resultado").textContent="PERDISTE";
        document.body.style.backgroundColor="red";
    }
    else if (myJuego.odenador == 2){
        
        document.getElementById("imagenOrdenador").src = "papel.jpg";
        document.getElementById("resultado").textContent="HAS GANADDO";
        document.body.style.backgroundColor="green";
    }
    else if (myJuego.odenador == 3){
        
        document.getElementById("imagenOrdenador").src = "tijera.jpg";
        document.getElementById("resultado").textContent="EMPATE";
        document.body.style.backgroundColor="#FFF2C5";
}

}
