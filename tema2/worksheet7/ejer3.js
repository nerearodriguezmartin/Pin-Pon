 function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
           center: {lat: 37.1512198, lng: -3.6167244999999997},
           zoom: 16
         });
    
         var coordsDiv = document.getElementById('coords');
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(coordsDiv);
        map.addListener('mousemove', function(event) {
             console.log(coordsDiv = 'lat: ' + event.latLng.lat() + ', lng: ' + event.latLng.lng());
        });
            
        var myLatLng = {lat: 37.1512198, lng: -3.6167244999999997};

    
     }
  initMap();