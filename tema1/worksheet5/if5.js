var examen1 = parseInt(prompt ("Introduce la nota del primer exámen"));
var examen2 = parseInt(prompt ("Introduce la nota del segundo exámen"));
var trab1 = parseInt(prompt ("Introduce la nota del primer trabajo"));
var trab2 = parseInt(prompt ("Introduce la nota del segundo trabajo"));
var media = (((examen1+examen2)/2)*0.75)+(((trab1+trab2)/2)*0.25);

if (examen1>=4.5 && examen2>=4.5 && trab1>=4.5 && trab2>=4.5){
    if (media>=5)
        alert("Enhorabuena, has aprobado con un "+media)
}
else 
    alert("Has suspendido :C")

