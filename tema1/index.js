document.write("Escribiendo desde index.js");
document.write("Otra linea");
console.log("consola");

let i = 0;
do {
  i += 1;
  document.write(i+"<br>");
} while (i < 5);


var encontrado=false;

while(i<20 && !encontrado)
{
    if(i==10)
        encontrado=true;

    i++;
    document.write("Segundo bucle con i="+i+" - encontrado vale "+encontrado+"<br>")
}


const arr = ["Jose", "Pepe", "Juan"];

for (let i=0; i<arr.length; i++) //a la vieja usanza, menos útil, lleva a más errores
    document.write(arr[i]+"<br>")


//FOR... OF --> más cómodo y seguro
    for (let i of arr){
    document.write(i+"<br>")    
}

//FOR .. IN --> analiza dentro de los objetos
