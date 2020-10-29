var fechaHoy = new Date();
var fecha85 = new Date();
fecha85.setUTCDate(fechaHoy.getDate()+85);


var fecha187 = new Date();
fecha187.setUTCDate(fechaHoy.getDate()-187);

fecha85.setFullYear(fecha85.getFullYear()+2);

fecha187.setHours(fecha187.getHours()-24);

var fechaResto = new Date(fecha85 - fecha187);

document.write("FECHA 85" + "<br>");
document.write("El año actual es: "+ fecha85.getFullYear()+"<br>");
document.write("El mes actual es: "+ fecha85.getMonth()+"<br>");
document.write("El día actual es: " + fecha85.getDate() + "<br>");
document.write("La hora actual es: " + fecha85.getHours() + "<br>");
document.write("Los minutos actuales: " + fecha85.getMinutes() + "<br>");
document.write("Los segundos actuales: " + fecha85.getSeconds() + "<br>");

document.write("FECHA 187" + "<br>");
document.write("El año actual es: "+ fecha187.getFullYear()+"<br>");
document.write("El mes actual es: "+ fecha187.getMonth()+"<br>");
document.write("El día actual es: " + fecha187.getDate() + "<br>");
document.write("La hora actual es: " + fecha187.getHours() + "<br>");
document.write("Los minutos actuales: " + fecha187.getMinutes() + "<br>");
document.write("Los segundos actuales: " + fecha187.getSeconds() + "<br>");

document.write("FECHA RESTO" + "<br>");
document.write("El año actual es: "+ fechaResto.getFullYear()+"<br>");
document.write("El mes actual es: "+ fechaResto.getMonth()+"<br>");
document.write("El día actual es: " + fechaResto.getDate() + "<br>");
document.write("La hora actual es: " + fechaResto.getHours() + "<br>");
document.write("Los minutos actuales: " + fechaResto.getMinutes() + "<br>");
document.write("Los segundos actuales: " + fechaResto.getSeconds() + "<br>");
document.write("<br>"+fechaResto.toLocaleString()); // de esta forma me muestra la fecha completa en el formato local, es decir, como lo hacemos en España
