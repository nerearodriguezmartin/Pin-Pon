window.onload = function(){
    document.getElementById("boton").addEventListener("click", añadeLista);
}

function añadeLista(){
    var newElement = document.getElementById("input").value;
    var elem = document.createTextNode(newElement);
    var li = document.createElement('li');
    li.appendChild(elem);
    var ul = document.getElementsByTagName('ul')[0];
    ul.appendChild(li);
    //limpiamos el input
    document.getElementById('input').value = "";
}