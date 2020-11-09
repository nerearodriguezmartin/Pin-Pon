window.addEventListener("load", main);

function main() {
    document.getElementById("name").addEventListener("keyup", compruebaNombre);
    document.getElementById("apellidos").addEventListener("keyup", compruebaApellido);
    document.getElementById("dni").addEventListener("keyup", compruebaDni);
    document.getElementById("telefono").addEventListener("keyup", compruebaTel);
    document.getElementById("mail").addEventListener("keyup", compruebaMail);
    document.getElementById("user").addEventListener("keyup", compruebaUser);
    
}

function compruebaNombre(){
    var nom = /\w+/; 
    var OK = nom.exec(document.getElementById("name").value);
    if (!OK) {
        document.getElementById("name").style.backgroundColor = "red";
    } else {
        document.getElementById("name").style.backgroundColor = "green";
    }
}


function compruebaApellido(){
    var apel = /\w+/; 
    var OK = apel.exec(document.getElementById("apellidos").value);
    if (!OK) {
        document.getElementById("apellidos").style.backgroundColor = "red";
    } else {
        document.getElementById("apellidos").style.backgroundColor = "green";
    }
}

function compruebaDni(){
    var dni = /^\d{8}[a-zA-Z]$/; 
    var OK = dni.exec(document.getElementById("dni").value);
    if (!OK) {
        document.getElementById("dni").style.backgroundColor = "red";
    } else {
        document.getElementById("dni").style.backgroundColor = "green";
    }
}

function compruebaTel(){
    var tel = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{3}/; 
    var OK = tel.exec(document.getElementById("telefono").value);
    if (!OK) {
        document.getElementById("telefono").style.backgroundColor = "red";
    } else {
        document.getElementById("telefono").style.backgroundColor = "green";
    }
}

function compruebaMail(){
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; ; 
    var OK = mail.exec(document.getElementById("mail").value);
    if (!OK) {
        document.getElementById("mail").style.backgroundColor = "red";
    } else {
        document.getElementById("mail").style.backgroundColor = "green";
    }
}

function compruebaUser(){
    var user = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; 
    var OK = user.exec(document.getElementById("user").value);
    if (!OK) {
        document.getElementById("user").style.backgroundColor = "red";
    } else {
        document.getElementById("user").style.backgroundColor = "green";
    }
}