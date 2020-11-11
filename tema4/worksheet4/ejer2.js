window.addEventListener("load", main);

function main() {
    document.getElementById("normal").addEventListener("click", darEstilo);
    document.getElementById("minimalista").addEventListener("click", quitarEstilo);
}

function darEstilo(){
    var link = document.head.getElementsByTagName("link")[0];
    link.href = "normal.css";
}

function quitarEstilo(){
    var link = document.head.getElementsByTagName("link")[0];
    link.href = "minimalista.css";

}