export {Juego, Bola, Pala};

class Juego {
  
  constructor(svg, puntos){
    this.svg = svg;
    this.bola = new Bola('bola', 10, 300, 300, 2, 2, 'pink');
    this.pala1 = new Pala('pala1', 10, 80, 10, 20);
    this.pala2 = new Pala('pala2', 10, 80, 1080, 50);
    this.dibujaPala(this.svg, this.pala1, this.pala2);
    this.dibujaBola(this.bola, this.svg);
    
    this.puntos = puntos;
    this.anima(this.pala1, this.pala2, this.bola, this.svg, this.puntos);
    this.puntosJugador1 = 0;
    this.puntosJugador2= 0;
    this.creaTablaPuntuaciones(puntos);
    

  }

  creaTablaPuntuaciones(puntos){
    var punto = document.createElement('table');
    var tr1 = document.createElement('tr');
    var tr2 = document.createElement('tr');
    var j1 = document.createElement('th');
    j1.textContent = "Puntuación del jugador 1";
    var j2 = document.createElement('th');
    j2.textContent = "Puntuación del jugador 2";
    var pp1 = document.createElement('td');
    var pp2 = document.createElement('td');
    pp1.textContent = 0;
    pp1.id = "pp1";
    pp2.id = "pp2";
    pp2.textContent = 0;
    tr1.appendChild(j1);
    tr1.appendChild(j2);
    tr2.appendChild(pp1);
    tr2.appendChild(pp2);
    punto.appendChild(tr1);
    punto.appendChild(tr2);
    puntos.appendChild(punto);
    
  }


  actualizaTabla(){
    document.getElementById("pp1").textContent = this.puntosJugador1;
    document.getElementById("pp2").textContent = this.puntosJugador2;
  }


  dibujaPala(svg, pala1, pala2){
    
    pala1.creaPala(svg, pala1);
    pala2.creaPala(svg, pala2);

    document.addEventListener("keydown", (event) => {
      var teclaPulsada = event.keyCode;
      if(teclaPulsada == 65){
        pala1.muevePalaArriba(pala1);
        
      }

      if(teclaPulsada == 68){
        pala1.muevePalaAbajo(pala1);

      }

      if(teclaPulsada == 40){
        pala2.muevePalaArriba(pala2);

      }

      if(teclaPulsada == 38){
        pala2.muevePalaAbajo(pala2);

      }
      document.getElementById("pala1").setAttribute("y", pala1.yPala);
      document.getElementById("pala2").setAttribute("y", pala2.yPala);
    });
  }



  dibujaBola(bola, svg){
      bola = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      bola.setAttribute('id', this.bola.id);
      bola.setAttribute('cx', this.bola.posX);
      bola.setAttribute('cy', this.bola.posY);
      bola.setAttribute('r', this.bola.radio);
      bola.setAttribute('fill', this.bola.color);
      bola.incrX = this.bola.incrX;
      bola.incrY = this.bola.incrY;
      svg.appendChild(bola);
      document.body.appendChild(svg); 
  }

  actualizaJugador1(){
            clearInterval(this.intervalo);
            
            this.actualizaTabla();
            goal.style.display = "inline-block";
            if(this.puntosJugador1 < 5 && this.puntosJugador2 < 5){
              bola = new Bola('bola', 10, 300, 300, 2, 2, 'pink');
              this.anima(bola);
            }
            else{
              clearInterval(this.intevalo);
            }
  }


  anima(pala1, pala2, bola, svg, puntos){

      
   this.intervalo =  setInterval(() => 
    {
        bola.posX += bola.incrX;
        bola.posY += bola.incrY;

        var ball = document.getElementById('bola');
        var tamanoSvg = svg.getBoundingClientRect();
        var goal = document.createElement('img');
        goal.src = "giphy.gif";
        puntos.appendChild(goal);
        goal.style.display = "none";

        ball.setAttribute("cx", bola.posX);
        ball.setAttribute("cy", bola.posY);

        


        // choque pala1
        if ((bola.posX - bola.radio) <= (pala1.xPala + pala1.anchoPala) && pala1.yPala <= (bola.posY - bola.radio)  && (bola.posY - bola.radio) <= (pala1.yPala + pala1.altoPala)){
          bola.incrX*=-1;
          bola.incrY*=-1;
        }

        // choque pala2
        if ((bola.posX + bola.radio) >= (pala2.xPala) && pala2.yPala <= (bola.posY + bola.radio) && (bola.posY + bola.radio) <= (pala2.yPala + pala2.altoPala)){
          bola.incrX*=-1;
          bola.incrY*=-1;
        }


        // choque con paredes
        if((bola.posY + bola.radio)>= tamanoSvg.height ||  (bola.posY - bola.radio)<= 0 )
            {
                bola.incrY *=- 1;
            }


            // se sale del tablero por la derecha
        if ((bola.posX + bola.radio)>= tamanoSvg.width)
          {
            this.puntosJugador1++;
            this.actualizaJugador1();
            



          }

          // se sale del tablero por la izquierda
        if((this.posX - this.radio) <= 0)
          {
            clearInterval(this.intevalo);
            this.puntosJugador2++;
            this.actualizaTabla();
            puntos.appendChild(goal);
            if(this.puntosJugador1 < 5 && this.puntosJugador2 < 5){
              bola = new Bola('bola', 10, 300, 300, 2, 2, 'pink');
              
            }
            else{
              clearInterval(this.intevalo);
            }
          }

    }, 10);
    
  }

}


class Bola{

  constructor(id, radio, posX, posY, incrX, incrY, color){
      this.id = id;
      this.radio = radio;
      this.posX = posX;
      this.posY = posY;
      this.incrX = incrX;
      this.incrY = incrY;
      this.color = color;
      this.bola = null;
  }
  
}


class Pala{
    constructor(id, anchoPala, altoPala, xPala, yPala){
        this.id = id;
        this.altoPala = altoPala;
        this.anchoPala = anchoPala;
        this.xPala = xPala;
        this.yPala = yPala;

    }
    
    creaPala(svg, pala){

        this.rect=document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.rect.setAttribute("x", pala.xPala);
        this.rect.setAttribute("y", pala.yPala);
        this.rect.setAttribute("width", pala.anchoPala);
        this.rect.setAttribute("height", pala.altoPala);
        this.rect.setAttribute("id", pala.id);
        
        svg.appendChild( this.rect);
    }

    muevePalaArriba(pala){
      pala.yPala += 5;
    }

    muevePalaAbajo(pala){
      pala.yPala-= 5;
    }

    añadePunto(){
      this.puntuacion++;
    }
    

}
