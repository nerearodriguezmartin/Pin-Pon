
/*function aviso(){
    console.log("AVISO");
}

setTimeout( () => console.log("AVISO DESDE FUNCION SIN NOMBRE"), 3000);
/*De esta forma estamos usando una funcion anonima(arrow)*/

// la forma mas sencilla
/*setTimeout(aviso, 3000) */
// no se le pueden poner los paréntesis, porque si no se ejecuta directamente la funcion;


var cont = 60;

function contador(){
    console.log(cont);
    cont--;

    if (cont > 0)
        setTimeout( contador, 1000);
}

setTimeout( contador, 1000);
 


