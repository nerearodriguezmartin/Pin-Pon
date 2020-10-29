function minMay(cadena){
    var minuscula = cadena.toLowerCase();
    var mayuscula = cadena.toUpperCase();

    if (cadena == mayuscula)
        return document.write("La cadena está en mayusculas");

    else if (cadena == minuscula)
        return document.write("La cadena está en minúsculas");

    else 
        return document.write("La cadena combina mayusculas y minusculas");
}

var cadena = new String(prompt("Introduce una cadena de texto"));
minMay(cadena);