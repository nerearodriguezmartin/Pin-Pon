window.onload = () =>
{
    document.getElementById('gato').addEventListener("click", cuenta);
    document.getElementById('gato1').addEventListener("click", cuenta1);
    document.getElementById('gato2').addEventListener("click", cuenta2);
}


var cont = 0;
var cont1 = 0;
var cont2 = 0;


function cuenta(){
    cont ++;
    
    document.getElementById('contador').textContent = cont;
}

function cuenta1(){
    cont1 ++;
    /*var contador = document.createTextNode(cont);*/
    document.getElementById('contador1').textContent = cont1;
}

function cuenta2(){
    cont2 ++;
    document.getElementById('contador2').textContent = cont2;
}