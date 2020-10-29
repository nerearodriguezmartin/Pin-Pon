//pedimos los datos al usuario
var num = prompt("Introduce el primer número");
var numero = prompt("Introduce el segundo número");
var operacion = prompt("Introduce el símbolo de la operación(+ , -, *, /)");

//con el switch resolvemos la operación escogida
switch(operacion){
    case '+':
        document.write("El resultado de la suma es: "+(num+numero));
        break;
    
    case '-':
        document.write("El resultado de la resta es: "+num-numero);
        break;
    
    case '*':
        document.write("El resultado del producto es: "+num*numero);
        break;
    
    case '/':
        document.write("El resultado de la división es: "+num/numero);
        break;
    
    default:
        break;
}