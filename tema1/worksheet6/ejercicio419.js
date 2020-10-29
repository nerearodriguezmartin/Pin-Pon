var ancho = parseInt(prompt("Introduce los pixeles de la anchura"));

document.write("<table border=0 cellspacing=2 bgcolor=black>");

    for(let i=0; i<8; i++){
        if(i%2 == 0){
            document.write("<tr height="+ancho+">");
            for(let j=0; j<8; j++){
                if(j%2 == 0)
                    document.write("<td width="+ancho+" bgcolor= black>&nbsp;</td>");
                else
                    document.write("<td width="+ancho+" bgcolor= white>&nbsp;</td>");
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

document.write("</table>");