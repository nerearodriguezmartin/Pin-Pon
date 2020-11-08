window.addEventListener("load", main);

function main() {
    quitarEstilo();
    document.getElementById("normal").addEventListener("click", darEstilo);
    document.getElementById("minimalista").addEventListener("click", quitarEstilo);
}

function darEstilo(){
    document.getElementsByTagName("head")[0].innerHTML = "<link href='normal.css'>";
}

function quitarEstilo(){
    document.getElementsByTagName("head")[0].innerHTML = "<link href='minimalista.css'>";
}