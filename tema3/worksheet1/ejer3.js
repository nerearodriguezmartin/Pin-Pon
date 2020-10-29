function lanzamiento(){
    return (Math.random()*(7-1)+1);
}

var uno = 0;
var dos= 0;
var tres= 0;
var cuatro= 0;
var cinco= 0;
var seis= 0;

for (var i = 0; i<6000; i++){
    var lanzamient = parseInt(lanzamiento());
    if (lanzamient ==1){
        uno++;
    }
    if (lanzamient==2){
        dos++;
    }
    if (lanzamient==3){
        tres++;
    }
    if (lanzamient==4){
        cuatro++;
    }

    if (lanzamient==5){
        cinco++;
    }
    if (lanzamient==6){
        seis++;
    }
}
document.write("Hemos tirado el dado 6000 veces y los resultados son los siguientes: <br>");
document.write("El número 1 ha salido "+uno+" veces <br>");
document.write("El número 2 ha salido "+dos+" veces <br>");
document.write("El número 3 ha salido "+tres+" veces <br>");
document.write("El número 4 ha salido "+cuatro+" veces <br>");
document.write("El número 5 ha salido "+cinco+" veces <br>");
document.write("El número 6 ha salido "+seis+" veces <br>");