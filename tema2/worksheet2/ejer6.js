document.write("<table border= '1px solid black'>");
    document.write("<tr><td>Número</td><td>Seno</td></tr>")


    for(let i=0; i<10; i++){
        document.write("<tr>");

            document.write("<td>" + i + "</td>");
            document.write("<td>" + Math.sin(i) + "</td>");
        
        document.write("</tr>");
    }

document.write("</table>");