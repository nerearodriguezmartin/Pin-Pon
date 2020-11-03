// arrastrar la imagen con el ratón 

var arrastrando = false;



function main(e){
    var imagenes = document.querySelectorAll("img");
    imagenes.forEach(imagen => {
        imagen.addEventListener("click", imagenPulsada);
    });
    window.addEventListener("mousemove", muevoRaton);
}


function imagenPulsada(e) {
    arrastrando = !arrastrando;
}

function muevoRaton(e) {
    if (arrastrando) {
        e.target.style.marginLeft = (e.x - 10) + "px";
        e.target.style.marginTop = (e.y - 10) + "px";
    }
}

window.addEventListener("load", main);
