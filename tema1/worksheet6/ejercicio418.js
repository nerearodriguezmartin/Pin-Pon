var col = parseInt(prompt("Introduce el número de columnas"));
var fila = parseInt(prompt("Introduce el número de filas"));
var alto = parseInt(prompt("Introduce los pixeles de la altura"));
var ancho = parseInt(prompt("Introduce los pixeles de la anchura"));

document.write("<table border=0 cellspacing=2 bgcolor=black>");

    for(let i=0; i<fila; i++){
        document.write("<tr bgcolor=white height="+alto+">");
        for(let j=0; j<col; j++)
            document.write("<td width="+ancho+">&nbsp;</td>");
        
        document.write("</tr>");
    }

document.write("</table>");