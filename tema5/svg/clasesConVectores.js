class Juego {
  
  constructor(svg, puntos){
    this.svg = svg;
    this.bola = new Bola('bola', 10, 300, 300, 2, 2, 'pink', this.svg);
    this.pala1 = new Pala('pala1', 10, 80, 10, 20);
    this.pala2 = new Pala('pala2', 10, 80, 1080, 50);
    this.dibujaPala(this.svg, this.pala1, this.pala2);
    this.dibujaBola(this.bola, this.svg);
    
    this.puntos = puntos;
    this.anima(this.pala1, this.pala2, this.bola, this.svg, this.puntos);
    this.puntosJugador1 = 0;
    this.puntosJugador2= 0;
    this.creaTablaPuntuaciones(puntos);
    /*this.goal = document.createElement('img');*/

  }

  creaTablaPuntuaciones(){
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
    this.puntos.appendChild(punto);
    
    /*this.goal.src = "giphy.gif";
    this.puntos.appendChild(goal);
    this.goal.style.display = "none";*/
    
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
      bola.setAttribute('cx', this.bola.position.x);
      bola.setAttribute('cy', this.bola.position.y);
      bola.setAttribute('r', this.bola.radio);
      bola.setAttribute('fill', this.bola.color);
      bola.incrX = this.bola.incrX;
      bola.incrY = this.bola.incrY;
      svg.appendChild(bola);
      document.body.appendChild(svg); 
  }

  actualizaJugadores(){
            clearInterval(this.intervalo);
            
            this.actualizaTabla();
            /*this.goal.style.display = "inline-block";*/
            if(this.puntosJugador1 < 5 && this.puntosJugador2 < 5){
              this.bola = new Bola('bola', 10, 300, 300, 2, 2, 'pink', this.svg);
              this.anima();
            }
            else if(this.puntosJugador1 >= 5 || this.puntosJugador2 >= 5){
              clearInterval(this.intevalo);
            }
  }


  


  anima(){

      
   this.intervalo =  setInterval(() => 
    {
        this.bola.position.x += this.bola.velocity.x;
        this.bola.position.y += this.bola.velocity.y;

        var ball = document.getElementById('bola');
        var tamanoSvg = this.svg.getBoundingClientRect();
        

        ball.setAttribute("cx", this.bola.position.x);
        ball.setAttribute("cy", this.bola.position.x);

        


        // choque pala1
        if ((this.bola.position.x - this.bola.radio) <= (this.pala1.xPala + this.pala1.anchoPala) && this.pala1.yPala <= (this.bola.position.y - this.bola.radio)  && (this.bola.position.y - this.bola.radio) <= (this.pala1.yPala + this.pala1.altoPala)){
          this.bola.velocity = new Vector(-this.bola.velocity.x, this.bola.velocity.y);

        }

        // choque pala2
        if ((this.bola.position.x + this.bola.radio) >= (this.pala2.xPala) && this.pala2.yPala <= (this.bola.position.y + this.bola.radio) && (this.bola.position.y + this.bola.radio) <= (this.pala2.yPala + this.pala2.altoPala)){

          this.bola.velocity = new Vector(-this.bola.velocity.x, this.bola.velocity.y);
        }


        // choque con paredes
        if((this.bola.position.x + this.bola.radio)>= tamanoSvg.height ||  (this.bola.position.y - this.bola.radio)<= 0 )
            {
                this.bola.velocity = new Vector(this.bola.velocity.x, -this.bola.velocity.y);
            }



            const newX = Math.max(
              Math.min(this.bola.position.x + this.bola.velocity.x, tamanoSvg.width),
              0
            );
        
            const newY = Math.max(
              Math.min(this.bola.position.y + this.bola.velocity.y, tamanoSvg.height),
             0
            );
            
           this.position= new Vector(newX, newY);

           // se sale del tablero por la derecha
        if ((this.bola.position.x + this.bola.radio)>= tamanoSvg.width)
          {
            this.puntosJugador1++;
            this.actualizaJugadores();
            



          }

          // se sale del tablero por la izquierda
        if((this.bola.posX - this.bola.radio) <= 0)
          {
            this.puntosJugador2++;
            this.actualizaJugadores();
          }

    }, 10);
    
  }
}





class Bola{

  /*constructor(id, radio, posX, posY, incrX, incrY, color){
      this.id = id;
      this.radio = radio;
      this.posX = posX;
      this.posY = posY;
      this.incrX = incrX;
      this.incrY = incrY;
      this.color = color;
      this.bola = null;
  }*/
  constructor(id, radio, posicionX, posicionY, velocidadX, velocidadY, color, svgContenedor) {
    this.id = id;
    this.color = color;
    this.radio = radio;
  
    this.position = new Vector(posicionX, posicionY);
    this.velocity = new Vector(velocidadX,velocidadY);
  }
  
  mueve(anchoContenedor, altoContenedor)
  {
    // Comprobamos ahora si está fuera de los límites
    // Eje X
    if (this.position.x-this.radio<=0 || this.position.x+this.radio >= anchoContenedor )
        this.velocity = new Vector(-this.velocity.x, this.velocity.y);
    
    // Eje Y
    if (this.position.y-this.radio <=0 || this.position.y+this.radio >= altoContenedor )
      this.velocity = new Vector(this.velocity.x, -this.velocity.y);
    
      const newX = Math.max(
        Math.min(this.position.x + this.velocity.x, anchoContenedor),
        0
      );
  
      const newY = Math.max(
        Math.min(this.position.y + this.velocity.y, altoContenedor),
       0
      );
      
     this.position= new Vector(newX, newY);
  }
  
  
  dibuja()
  {
    this.tagCircle.setAttributeNS(null, "cx", this.position.x);
    this.tagCircle.setAttributeNS(null, "cy", this.position.y);
  }
  
  get sphereArea() {
  return 4 * Math.PI * this.radio ** 2;
  }

  
}


class Vector {
constructor(x, y) {
this.x = x;
this.y = y;
}


add(vector) {
return new Vector(this.x + vector.x, this.y + vector.y);
}

subtract(vector) {
return new Vector(this.x - vector.x, this.y - vector.y);
}

multiply(scalar) {
return new Vector(this.x * scalar, this.y * scalar);
}

dotProduct(vector) {
return this.x * vector.x + this.y * vector.y;
}

get magnitude() {
return Math.sqrt(this.x ** 2 + this.y ** 2);
}

get direction() {
return Math.atan2(this.x, this.y);
}
}

const collisionVector = (particle1, particle2) => {
return particle1.velocity
.subtract(particle1.position
  .subtract(particle2.position)
  .multiply(particle1.velocity
    .subtract(particle2.velocity)
    .dotProduct(particle1.position.subtract(particle2.position))
    / particle1.position.subtract(particle2.position).magnitude ** 2
  )

  // add mass to the system
  .multiply((2 * particle2.sphereArea) / (particle1.sphereArea + particle2.sphereArea))
);
};



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
