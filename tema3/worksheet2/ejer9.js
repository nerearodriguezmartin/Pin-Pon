function tirada(){
    x = parseInt(Math.random()*(7-1)+1);
    return x;
}

// // creamos un array para guardar las tiradas de cada dado
// let arri = new Array();
// let arrj = new Array();


// // bucle que simula las tiradas y guarda los resultados
// // en un array para cada dado
// for (var i = 0; i<36000; i++){
//    x = tirada();
//    y = tirada();
//    arri.push(x);
//    arrj.push(y);

// }


// // array bidimensional
// let arr = new Array();
// for (let i = 0; i<arri.length; i++){
//     arr[i, 0] = arri[i];
// }

// for (let i = 0; i<arrj.length; i++){
//     arr[i, 1] = arrj[i];
// }

// for (let i = 0; i<arri.length; i++){
//     arr[i, 2] = arri[i]+arrj[i];
// }

function ejercicio9()
{
  let combinaciones = Array(6).fill(0).map( () => Array(6).fill(0))
  let dado1, dado2;

  for(var i=0;i<36000;i++){
    dado1 = tirada();
    dado2 = tirada();
    combinaciones[dado1-1][dado2-1]++;
  }
  return combinaciones;
}

let combinaciones = ejercicio9();
document.write("<table><tr>");

document.write("<td>Resultado</td>");
for (let i = 0; i < combinaciones.length; i++) {
    document.write("<td>" + (i + 1) + "</td>");
}
document.write("</tr>");

for (let i = 0; i < combinaciones.length; i++) {
    document.write("<tr><td>" + (i + 1) + "</td>");
    for (let j = 0; j < combinaciones.length; j++) {
        document.write("<td>" + combinaciones[i][j] + "</td>");
    }
    document.write("</tr>");
}
