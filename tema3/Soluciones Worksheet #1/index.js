// EJERCICIO 2
function lanzamiento(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// EJERCICIO 3

var num1=0;
var num2=0;
var num3=0;
var num4=0;
var num5=0;
var num6=0;
function ejercicio3(){
  for(let i=0;i<6000;i++){
    numeroResultado = lanzamiento(1,6);
    if(numeroResultado==1){
      num1++;
    }else if (numeroResultado==2) {
      num2++;
    }else if (numeroResultado==3) {
      num3++;
    }else if (numeroResultado==4) {
      num4++;
    }else if (numeroResultado==5) {
      num5++;
    }else {
      num6++;
    }
  }
  document.write("El numero 1 ha salido: "+num1+" veces"+"<br>"+"El numero 2 ha salido: "+num2+" veces"+"<br>"+"El numero 3 ha salido: "+num3+" veces"+"<br>"+"El numero 4 ha salido: "+num4+" veces"+"<br>"+"El numero 5 ha salido: "+num5+" veces"+"<br>"+"El numero 6 ha salido: "+num6+" veces")
}


// EJERCICIO 6

function potencia(base ,exponente){
    if (exponente==1) 
        return base;
    else
        return base * potencia(base,exponente-1); 
}


// EJERCICIO 7

function factorial (numero) { 
	if (numero == 0)
		return 1; 
	else
	    return numero * factorial(numero-1); 
}