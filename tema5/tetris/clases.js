var canvas;
var ctx;
var FPS;



class Juego{

    inicializa(){
        setInterval(function(){
            principal();
        }, 1000/FPS);
    }

    principal(){
        canvas.borraCanvas();
    }

    leeTeclado(){
        //LECTURA DEL TECLADO
        document.addEventListener('keydown',function(tecla){
      
          if(tecla.keyCode == 38){
            pieza.rotar();
          }
      
          if(tecla.keyCode == 40){
            pieza.abajo();
          }
      
          if(tecla.keyCode == 37){
            pieza.izquierda();
          }
      
          if(tecla.keyCode == 39){
            pieza.derecha();
          }
      
        });
      }
}

class Canvas{
    constructor(anchoCanvas, altoCanvas){
        this.canvas = document.createElement('canvas');
        this.ctx = canvas.getContext('2d');
        canvas.style.width = anchoCanvas;
        canvas.style.height = altoCanvas;
        document.appendChild(canvas);
    }

    borraCanvas(){
        canvas.width = anchoCanvas;
        canvas.height = altoCanvas;
    }
}

class Pieza{
    constructor(anchoPieza, altoPieza){
        this.anchoPieza = anchoPieza;
        this.altoPieza = altoPieza;
        this.x = 4;
        this.y = 0;
    
        this.tipo = 0;		//7 posibilidades (0-6)
        this.angulo = 0;	//4 posibilidades (0-3)
    
        this.retraso = 50;
        this.fotograma = 0;
    }

    nueva(){
		this.tipo = Math.floor((Math.random() * 7));
		this.fotograma = 0;
		this.x = 4;
		this.y = 0;
    }
    
    rotar(){
		if(this.angulo < 3)
			anguloNuevo = this.angulo + 1;
		else
			anguloNuevo=0;

		//SI LA FUNCIÓN DEVUELVE UN VALOR FALSO (NO HAY COLISIÓN, CAMBIAMOS EL ÁNGULO)
		if(this.colision(anguloNuevo, this.x, this.y)==false){
			this.angulo = anguloNuevo;
		}

  }

  colision(anguloNuevo, xNueva, yNueva){
    var resultado = false;

    //COMPROBAMOS LA COLISIÓN CON EL TABLERO
    for(py=0;py<4;py++){
        for(px=0;px<=4;px++){

            if(fichaGrafico[this.tipo][anguloNuevo][py][px]>0){
                if(tablero[yNueva + py][xNueva + px]>0){
                    resultado = true;
                }

            }
        }
    }

    //Devolvemos el resultado a la función principal
    return resultado;

};

    izquierda(){

        if(this.colision(this.angulo, this.x - 1, this.y)==false){
            this.x = this.x - 1;
        }
    console.log("izquierda");
}

    derecha(){

        if(this.colision(this.angulo, this.x + 1, this.y)==false){
            this.x = this.x + 1;
        }
    console.log("derecha");
}


}

class Tablero{
    constructor(anchoTablero, altoTablero){
        this.anchoTablero = anchoTablero;
        this.altoTablero = altoTablero;
        this.tablero = [
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1]
        ];

        

    }

    dibujaTablero(){
        for(py=margenSuperior;py<=altoTablero;py++){
            for(px=1;px<=anchoTablero;px++){
    
                if(tablero[py][px]>0){
                    if(tablero[py][px]==1)
                        ctx.fillStyle=rojo;
                    if(tablero[py][px]==2)
                        ctx.fillStyle=morado;
                    if(tablero[py][px]==3)
                        ctx.fillStyle=naranja;
                    if(tablero[py][px]==4)
                        ctx.fillStyle=amarillo;
                    if(tablero[py][px]==5)
                        ctx.fillStyle=verde;
                    if(tablero[py][px]==6)
                        ctx.fillStyle=cyan;
                    if(tablero[py][px]==7)
                        ctx.fillStyle=azul;
    
                    //A la posición this.py le restamos el margen superior para que dibuje en la zona de la pantalla física que toque
                    ctx.fillRect(((this.px-1)*tamanyoFicha),((this.py-margenSuperior)*tamanyoFicha),tamanyoFicha,tamanyoFicha);
                }
            }
        }
    }

    reiniciaTablero(){
        for(py=0;py<21;py++){
            for(px=0;px<12;px++){
                tablero[py][px] = tableroNuevo[py][px];
            }
        }
    }
}