window.onload = function(){
    document.getElementById("ant").addEventListener("click", muestraAnterior);
    document.getElementById("sig").addEventListener("click", muestraSiguiente);
}

var img = new Array("file:///C:/Users/Usuario/Desktop/2%C2%BA%20DAW/DWECliente/tema5/worksheet1/ejer6/foto.jpg", "file:///C:/Users/Usuario/Desktop/2%C2%BA%20DAW/DWECliente/tema5/worksheet1/ejer6/her.jpg", "file:///C:/Users/Usuario/Desktop/2%C2%BA%20DAW/DWECliente/tema5/worksheet1/ejer6/foto2.JPG", "file:///C:/Users/Usuario/Desktop/2%C2%BA%20DAW/DWECliente/tema5/worksheet1/ejer6/foto3.jpg", "file:///C:/Users/Usuario/Desktop/2%C2%BA%20DAW/DWECliente/tema5/worksheet1/ejer6/foto4.jpg", "file:///C:/Users/Usuario/Desktop/2%C2%BA%20DAW/DWECliente/tema5/worksheet1/ejer6/foto5.jpg", "file:///C:/Users/Usuario/Desktop/2%C2%BA%20DAW/DWECliente/tema5/worksheet1/ejer6/moto.jpg", "file:///C:/Users/Usuario/Desktop/2%C2%BA%20DAW/DWECliente/tema5/worksheet1/ejer6/turq.jpg");
function muestraAnterior(){
    var numeroImagen = numImagen();
    document.getElementById("sig").disabled = false;
    document.getElementById("foto").src = img[numeroImagen-1];
    if(numeroImagen<2){
        document.getElementById("ant").disabled = true;
    } else{
        document.getElementById("ant").disabled = false;
    }
}

function numImagen(){
    var src = document.getElementById('foto').src;

    var numImg = 0;
    for (var i=0; i<img.length; i++){
        if(src == img[i]){
            numImg = i;
        }
    }
    return numImg;
}

function muestraSiguiente(){
    document.getElementById("ant").disabled = false;
    var numeroImagen = numImagen();
    document.getElementById("foto").src = img[numeroImagen+1];
    if(numeroImagen>5){
        document.getElementById("sig").disabled = true;
    } else{
        document.getElementById("sig").disabled = false;
    }
}