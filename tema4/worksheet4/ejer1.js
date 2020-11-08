window.addEventListener("load", main);

function main() {
    quitarEstilo();
    document.getElementById("normal").addEventListener("click", darEstilo);
    document.getElementById("minimalista").addEventListener("click", quitarEstilo);
}



function darEstilo(){
    document.innerHTML = "<div style='widht: 200px; heigth:600px; backgroundColor:blue; border: 2px solid black'></div>"
    document.getElementById("title").style.fontFamily= 'Verdana';
    document.body.style.backgroundColor = "#f5cb92";
    document.getElementById("p4").style.fontWeight = 'bold' ;
    document.getElementById("p5").style.backgroundColor = "yellow";
    document.getElementById("p5").style.border = "2px solid";
    document.getElementById("marco").style.backgroundColor= "lightblue";
    document.getElementById("marco").style.border = "2px solid";
    document.getElementById("marco").style.fontWeight = "bold";
    document.getElementById("marco").style.color = "blue";
    document.getElementById("p3").innerHTML = "Este párrafo debe ser solo visible en el tema Normal";
    document.getElementById("p4").innerHTML = "Esto está dentro de un marco";
}

function quitarEstilo(){
    document.getElementById("title").style.fontFamily = 'serif'; 
    document.body.style.backgroundColor = "white";
    document.getElementById("p4").style.fontWeight = "";
    document.getElementById("p5").style.backgroundColor = "";
    document.getElementById("p5").style.border = "";
    document.getElementById("marco").style.backgroundColor= "";
    document.getElementById("marco").style.border = "";
    document.getElementById("marco").style.fontWeight = "";
    document.getElementById("marco").style.color = "";
    document.getElementById("p3").innerHTML = "";
    document.getElementById("p4").innerHTML = "";

    
}