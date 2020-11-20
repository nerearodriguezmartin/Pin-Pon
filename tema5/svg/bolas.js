import {Bola} from "./claseBola.js";

window.onload = () =>
{
    var bolas = new Array();
    for(var i= 0; i<=100; i++){
        var radio = parseInt((Math.random()*20)+5);
        var posX = parseInt(Math.random()*80);
        var posY = parseInt(Math.random()*80);
        var incrX = parseInt(Math.random()*5)+2;
        var incrY = parseInt(Math.random()*5)+2;
        var color = "rgb("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
        var id = i;
        
        bolas.push(new Bola(id, radio, posX, posY, incrX, incrY, color));

    }

    for(let bola of bolas){
        bola.creaBola();
        bola.anima();
    }
}

    function generarNumero(numero){
	    return (Math.random()*numero).toFixed(0);
    }