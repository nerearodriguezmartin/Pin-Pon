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



    // Añadimos Event Listener a las celdas y al botón
    let celdas = document.querySelectorAll("td");
    celdas.forEach(celda => {
        celda.addEventListener("mousemove", dibuja);
    });

}


function dibuja(e) {
    if (e.shiftKey) {
        e.target.style.backgroundColor = "blue";
    } else if (e.ctrlKey) {
        e.target.style.backgroundColor = "red";
    }  
}



window.addEventListener("load", tabla);