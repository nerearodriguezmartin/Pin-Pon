window.addEventListener("load", main);
var letra=11;

function main() {
    document.getElementById("aumentar").addEventListener("click", aumentar);
    document.getElementById("defecto").addEventListener("click", porDefecto);
    document.getElementById("just").addEventListener("click", justificar);
    document.getElementById("izq").addEventListener("click", alinearIzquierda);
    
}

function aumentar(){
    letra++;
    document.body.style.fontSize = letra+"px";
}

function porDefecto(){
    letra = 11;
    document.body.style.fontSize = letra+"px";
}

function justificar(){
    document.body.style.textAlign = "justify";
}

function alinearIzquierda(){
    document.body.style.textAlign = "left";
}