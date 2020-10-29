document.write("<table border>");
    document.write("<tr>");
        document.write("<td>Navegador: </td>");
        document.write("<td>"+navigator.appName+"</td>");
    document.write("</tr>");

    document.write("<tr>");
        document.write("<td>Versión del navegador: </td>");
        document.write("<td>"+navigator.appVersion+"</td>");
    document.write("</tr>");


    document.write("<tr>");
        document.write("<td>Código:</td>");
        document.write("<td>"+navigator.appCodeName+"</td>");
    document.write("</tr>");

    document.write("<tr>");
        document.write("<td>Plataforma:  </td>");
        document.write("<td>"+navigator.platform+"</td>");
    document.write("</tr>");

    document.write("<tr>");
        document.write("<td>Cookies habilitadas:  </td>");
        document.write("<td>"+navigator.cookieEnabled+"</td>");
    document.write("</tr>");

    document.write("<tr>");
        document.write("<td>Cabecera de agente de usuario del navegador:  </td>");
        document.write("<td>"+navigator.userAgen+"</td>");
    document.write("</tr>");


document.write("</table>");

