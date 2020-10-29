var num = parseInt(prompt("Introduce el número de columnas"));
var alto = parseInt(prompt("Introduce los pixeles de la altura"));
var ancho = parseInt(prompt("Introduce los pixeles de la anchura"));

document.write("<table border=0 cellspacing=2 bgcolor=black>");
document.write("<tr height="+alto+">");
    for(let i=0; i<num; i++){
        if(i%2 == 0)
            document.write("<td width="+ancho+" bgcolor= black>&nbsp;</td>");
        else
            document.write("<td width="+ancho+" bgcolor= white>&nbsp;</td>");
    }
document.write("</tr>");
document.write("</table>");
