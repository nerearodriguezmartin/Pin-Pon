window.onload = () =>
{

    

    setInterval( anima, 10);
    setInterval (anima1, 10);
    setInterval (anima2, 10);
    


}
    var posX = 0;
    var posY = 0;
    var incrX = 4;
    var incrY = 0.5;

function anima()
{
    var bola = document.getElementById("bola");
    
    //bola
    bola.setAttribute("cx", posX);
    bola.setAttribute("cy", posY);
    posX+= incrX;
    posY+= incrY;
    if (posX >=1000 || posX <= 0)
    {
        incrX *=- 1;
        
    }
    else if(posY>=1000 ||  posY <= 0 ){
        incrY *=- 1;
    }

}

    var posiX = 50;
    var posiY = 50;
    var increX = 1;
    var increY = 0.5;
function anima1(){
    //bola1
    var bola1 = document.getElementById("bola1");
    
    bola1.setAttribute("cx", posiX);
    bola1.setAttribute("cy", posiY);
    posiX+= increX;
    posiY+= increY;
    if (posiX >=1000 || posiX <= 0)
    {
        increX *=- 1;
        
    }
    else if(posiY>=1000 ||  posiY <= 0 ){
        increY *=- 1;
    }
}
    

var posicX = 20;
var posicY = 15;
var incremX = 3;
var incremY = 1;
function anima2(){
    var bola2 = document.getElementById("bola2");
    
    bola2.setAttribute("cx", posicX);
    bola2.setAttribute("cy", posicY);
    posicX+= incremX;
    posicY+= incremY;
    if (posicX >=1000 || posicX <= 0)
    {
        incremX *=- 1;
        
    }
    else if(posicY>=1000 ||  posicY <= 0 ){
        incremY *=- 1;
    }

}
    
    

