window.onload = function(){
    
    let nombre = getCookie("nombre");
    let color = getCookie("color");
    let background = getCookie("background");
    let size = getCookie("size");
    document.getElementById("enlace").addEventListener("click", borrarCookie);
    if(nombre && color && background && size){
        document.write("Hola "+nombre);
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
        document.body.style.fontSize = size;
        document.getElementById("enlace").style.color = "black";
        
      }
    else{
        document.getElementById("boton").addEventListener("click", creaCookie);
    }

    
  }
  
  function aplicarCambios(){
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
        document.body.style.fontSize = size;
        document.write("Hola "+nombre);
        document.getElementById("enlace").style.color = "black";
       

  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function borrarCookie(){
    let nombre = getCookie("nombre");
    document.cookie = "nombre="+ nombre +"; max-age=0";
    document.cookie = "color="+ color +"; max-age=0";
    document.cookie = "background="+ background +"; max-age=0";
    document.cookie = "size="+ size +"; max-age=0";
    document.getElementById("enlace").style.color = "white";
  }

  function creaCookie(){
    let nombre = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let background = document.getElementById("background").value;
    let size = document.getElementById("size").value;
    document.cookie = "color="+ color +"; max-age=300";
    document.cookie = "nombre="+ nombre; // al no definir expires ni max-age, la cookie expira al final de la sesión
    document.cookie = "background="+ background +"; max-age=300";
    document.cookie = "size="+ size +"; max-age=300";
    
    aplicarCambios();
  }