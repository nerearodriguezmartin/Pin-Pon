window.onload = function(){
    document.getElementById("boton").addEventListener("click", añadeFichero);
}

function añadeFichero(){
    var label = document.createElement('label');
   /* var text = document.createTextNode('Adjunta tu fichero');
    label.appendChild(text);*/
    var input = document.createElement('input');
    label.appendChild(input);
    input.type = "file";
    var div = document.getElementsByTagName('div')[0];
    div.appendChild(label);
}