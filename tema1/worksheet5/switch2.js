var numero = parseInt(prompt("Introduce un número"));


switch(true){ 
    case numero%3==0:
        document.write("El número es múltiplo de 3");
        break;
    
    case numero%5==0:
        document.write("El número es múltiplo de 5");
        break;
    
    case numero%2==0:
        document.write("El número es par");
        break;
    
    default:
        break;

}