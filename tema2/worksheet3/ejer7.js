var cadena = new String(prompt("Introduce una cadena de texto"));

function invierteCadena(cad_arg){
    var i = cad_arg.length;
    var cadenaInvertida = "";

     while (i>=0) {
        cadenaInvertida = cadenaInvertida + cad_arg.charAt(i);
        i--;
    }
    return cadenaInvertida;
}

function palindromo(cadena){
    if(cadena == invierteCadena(cadena))
        return true;
    else
        return false;
}

if (palindromo(cadena))
    document.write("La palabra es un palíndromo");

else
    document.write("La palabra no es un palíndromo");
