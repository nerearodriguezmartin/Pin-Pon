import {Bola, Pala, Juego} from "./clasesPinPon.js";
window.onload = () =>
{
       
    document.addEventListener("keypress", empieza);
    function empieza(e){
        document.getElementById("comienza").style.display = "none";
        var svg = document.getElementById('panel');
        var puntos = document.getElementById('puntos');
        if(e.keyCode == 13){
            var juego = new Juego(svg, puntos);

        }
    }
}

