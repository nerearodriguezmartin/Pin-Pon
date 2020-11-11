window.onload = function(){
    document.getElementById("div").style.visibility = 'hidden';
    let nombre = getCookie("nombre");
    if(nombre){
        document.write("Hola "+nombre);
        document.getElementById("enlace").style.color = "black";
    }
    else{
        document.getElementById("div").style.visibility = 'visible';
        document.getElementById("boton").addEventListener("click", creaCookie);
    }

    document.getElementById("enlace").addEventListener("click", borrarCookie);
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
    document.getElementById("enlace").style.color = "white";
  }

  function creaCookie(){
    let nombre = document.getElementById("name").value;
    document.cookie = "nombre="+ nombre +"; max-age=300";
    document.getElementById("div").style.visibility = 'hidden';
  }


