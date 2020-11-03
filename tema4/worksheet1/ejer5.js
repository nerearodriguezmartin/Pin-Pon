// primero hace la tabla 
function tabla(){
    document.write("<table style='border-collapse: collapse'; border: 1px solid black;'>");
    for (let i = 0; i < 100; i++) {
        document.write("<tr>");
        for (let j = 0; j < 100; j++) {
            document.write("<td height='2' width='2'></td>");
        }
        document.write("</tr>");
    }
    
    document.write ("</table>");
    document.write("<button id='borrar'>Borrar</button>");


    // controladores de eventos del ratón en cada celda
    let celdas = document.querySelectorAll("td");
    celdas.forEach(celda => {
        celda.addEventListener("mousemove", dibuja);
    });
    document.getElementById("borrar").addEventListener("click", borrar);
}


function dibuja(e) {
    if (e.shiftKey) {
        e.target.style.backgroundColor = "blue";
    } else if (e.ctrlKey) {
        e.target.style.backgroundColor = "red";
        
    } else if (e.buttons == 2) {// 2 es el código del botón izquierdo del ratón, para borrar
        e.target.style.backgroundColor = "white";
    }
}


// borrar todo con el boton
function borrar() {
    var celdas = document.querySelectorAll("td");
    celdas.forEach(celda => {
        celda.style.backgroundColor = "white";
    });

}

window.addEventListener("load", tabla);