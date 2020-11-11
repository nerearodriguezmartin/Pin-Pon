/*document.cookie = "name=oeschger";
document.cookie = "favorite_food=tripe";*/
function alertCookie() {
  document.cookie = "fondo=red; max-age=100";
}

//ES5

/*if (document.cookie.split(';').some(function(item) {
    if(item.trim().indexOf('name=')!=-1) 
        {
            item.trim().substring(item.trim().indexOf('='), )
            alert("Bienvenido")
        }
})) {
    console.log('The cookie "reader" exists (ES5)')
}

//ES2016

if (document.cookie.split(';').some((item) => item.trim().startsWith('reader='))) {
    console.log('The cookie "reader" exists (ES6)')*/

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


    window.onload = function(){
        let color = getCookie("fondo");
        if(color){
            document.body.style.backgroundColor = color;
        }
      }