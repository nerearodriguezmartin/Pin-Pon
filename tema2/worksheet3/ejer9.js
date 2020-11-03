/*var palabra = new String(prompt("Introduce una palabra"));

document.write("<table border= '1px solid black'>");
document.write("<tr>");
for(let i=0; i<palabra.length; i++)
    document.write("<td>" +cadena.charAt(i) + "</td>");
document.write("</tr>");

document.write("<tr>");
    document.write("<td>" +cadena.charAt(1) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("</tr>");

document.write("<tr>");
for(let i=palabra.length; i<0; i--)
    document.write("<td>" +cadena.charAt(i) + "</td>");
document.write("</tr>");


document.write("</table>");

/*document.write("<table border=0 cellspacing=2 bgcolor=black>");

    for(let i=0; i<palabra.length; i++){
        if(i%2 == 0){
            document.write("<tr>");
            for(let j=0; j<palabra.length; j++){
                if(j%2 == 0)
                    document.write("<td>"+ palabra.charAt(j) +"</td>");
                else
                    document.write("<td>"+ palabra.charAt(j) +"</td>");
            }
            
            document.write("</tr>");
        }
        else{
            document.write("<tr height="+ancho+">");
            for(let j=0; j<8; j++){
                if(j%2 == 0)
                    document.write("<td width="+ancho+" bgcolor= white>&nbsp;</td>");
                else
                    document.write("<td width="+ancho+" bgcolor= black>&nbsp;</td>");
            }
            
            document.write("</tr>");

        }
    }

document.write("</table>");*/

escribeEnCuadrado("HOLA");

/*
function escribeEnCuadrado(cadena) {
    document.write("<table>");

    document.write("<tr>");
    for (let i = 0; i < cadena.length; i++) {
        document.write("<td>" + cadena.charAt(i) +"</td>");
    }
    document.write("</tr>");

    for (let i = 1; i < cadena.length-1; i++) {
        document.write("<tr>");
        for (let j = 0; j < cadena.length; j++) {
            document.write("<td>")
        }
        document.write("</tr>");
    }



    document.write("</table>");
}*/