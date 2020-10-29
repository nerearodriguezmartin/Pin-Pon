function invierteCadena(cad_arg){
    var i = cad_arg.length;
    var cadenaInvertida = "";

     while (i>=0) {
        cadenaInvertida = cadenaInvertida + cad_arg.charAt(i);
        i--;
    }
    return cadenaInvertida;
}

function contarPalabras(cad_arg){
    //Troceamos el texto por los espacios
	var textoTroceado = cad_arg.split (" ");
	//Contamos todos los trozos de cadenas que existen
    var numeroPalabras = textoTroceado.length;
    return numeroPalabras;
}

function inviertePalabras(cad_arg){
    var textoTroceado = cad_arg.split (" ");
    var palabrasInvertidas = "";
    for (i=textoTroceado.length; i>0; i--){
        palabrasInvertidas = palabrasInvertidas + textoTroceado[i];
    }

    return palabrasInvertidas;
}

function encuentraPalabraMasLarga(cad_arg){
    
}