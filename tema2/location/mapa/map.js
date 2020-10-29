




    function success(pos) {
        var crd = pos.coords;
        var latitud = crd.latitud;
        var longitud = crd.longitud;
        var map = L.map('mapid').setView([latitud, longitud], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }       ).addTo(map);

        L.marker([latitud, longitud]).addTo(map)
        .bindPopup('Aquí estamos.<br> Easily customizable.')
        .openPopup();

      
       
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error);