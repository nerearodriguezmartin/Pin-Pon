export {Bola};

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

    creaBola(){
        var svg = document.getElementById('svg');

        this.bola = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.bola.setAttribute('id', this.id);
        this.bola.setAttribute('cx', this.posX);
        this.bola.setAttribute('cy', this.posY);
        this.bola.setAttribute('r', this.radio);
        this.bola.setAttribute('fill', this.color);
        this.bola.incrX = this.incrX;
        this.bola.incrY = this.incrY;
        svg.appendChild(this.bola);
        document.body.appendChild(svg); 
    }

    
    anima(){

        
        setInterval(() => 
        {
            this.posX += this.incrX;
            this.posY += this.incrY;

            this.bola.setAttribute("cx", this.posX);
            this.bola.setAttribute("cy", this.posY);

            var tamanoSvg = document.getElementsByTagName('svg')[0].getBoundingClientRect();

            if ((this.posX + this.radio)>= tamanoSvg.width || (this.posX - this.radio) <= 0)
            {
                this.incrX *=- 1;
                    
            }

            else if((this.posY + this.radio)>= tamanoSvg.height ||  (this.posY - this.radio)<= 0 )
            {
                this.incrY *=- 1;
            }
        }, parseInt((Math.random()*50)+5));
        
    }

}