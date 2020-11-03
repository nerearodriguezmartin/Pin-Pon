// funcion que escribe las coordenadas del ratón
function coordenadas(e) {
  console.log(("X: "+e.offsetX+", Y: "+e.offsetY));
}   

document.addEventListener("mousemove", coordenadas);