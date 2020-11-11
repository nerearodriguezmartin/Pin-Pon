window.onload = function (){
    var enlaces = document.getElementsByTagName('a');
    var penultimoEnlace = document.getElementsByTagName('a')[enlaces.length-1].href;
    var google = 0;

    for (var i=0; i<enlaces.length; i++){
        if (enlaces[i].href == "https://www.google.es/"){
            google++;
        }
    }

    var tercerParrafo = document.getElementsByTagName('p')[2];
    var enlacesTercerParrafo = tercerParrafo.getElementsByTagName('a');

    // creo el div en el que voy a meter los datos
    var div = document.createElement('div');
    var textoEnl = document.createTextNode("Número de enlaces de la página: "+enlaces.length);
    var pT = document.createElement('p');
    pT.appendChild(textoEnl);
    var textoPenEnl = document.createTextNode("Dirección a la que enlaza el penúltimo enlace: "+penultimoEnlace);
    var pP = document.createElement('p');
    pP.appendChild(textoPenEnl);
    var enlGoogle = document.createTextNode("Número de enlaces que enlazan a google: "+google);
    var pG = document.createElement('p');
    pG.appendChild(enlGoogle);
    var numEnl = document.createTextNode("Número de enlaces del tercer párrafo: "+enlacesTercerParrafo.length);
    var pE = document.createElement('p');
    pE.appendChild(numEnl);

    div.appendChild(pT);
    
    div.appendChild(pP);
    
    div.appendChild(pG);
    
    div.appendChild(pE);
    
    document.body.appendChild(div);
}