var num = parseInt(prompt("Introduce el número de columnas"));
var alto = parseInt(prompt("Introduce los pixeles de la altura"));
var ancho = parseInt(prompt("Introduce los pixeles de la anchura"));

document.write("<table border=0 cellspacing=2 bgcolor=black>");
document.write("<tr bgcolor=white height="+alto+">");
var i=0;
    while(i<num){
        document.write("<td width="+ancho+">&nbsp;</td>");
        i++;
    }
document.write("</tr>");
document.write("</table>");
