document.write("<table border>");
    document.write("<tr>");
        document.write("<td>Resolución de pantalla: </td>");
        document.write("<td>"+screen.width + "*" + screen.height+"</td>");
    document.write("</tr>");

    document.write("<tr>");
        document.write("<td>Area visible disponible: </td>");
        document.write("<td>"+screen.availWidth + "*" + screen.availHeight+"</td>");
    document.write("</tr>");


    document.write("<tr>");
        document.write("<td>Profundidad de color: </td>");
        document.write("<td>"+screen.colorDepth)+"bits </td>";
    document.write("</tr>");

    document.write("<tr>");
        document.write("<td>Resolución de color: </td>");
        document.write("<td>"+screen.pixelDepth)+"bits </td>";
    document.write("</tr>");


document.write("</table>");
