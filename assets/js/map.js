---
---

(function(L) {


    var map = L.map('map').setView([48.36936535443323, 14.513704089483294], 15);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        scrollWheelZoom: false,
        accessToken: 'pk.eyJ1IjoianplbmlzZWsiLCJhIjoiY2wyeXIxNWVpMDJvMjNjcWJpYWloZ29vdSJ9.aVp5R2VZRdkWBrCdo8J90Q'
    }).addTo(map);
    
    map.scrollWheelZoom.disable();
    
    // var popup = L.popup()
    //     .setLatLng([48.36936535443323, 14.513704089483294])
    //     .setContent("Softwarepark Hagenberg")
    //     .openOn(map);
    
    L.marker([48.36831567160878, 14.512507038275828]).addTo(map)
        .bindPopup('FH OÖ Campus Hagenberg, F&E<br/>Softwarepark 13<br/>4232 Hagenberg im Mühlkreis'
        + '<br/><br/><a target="_blank" href="https://www.openstreetmap.org/directions?from=&to=48.36831%2C14.51250">Route hierhin</a>');
        // .openPopup();
    
    L.marker([48.37001422662508, 14.513873568938944]).addTo(map)
        .bindPopup('SCCH Software Competence Center Hagenberg<br/>Softwarepark 32a<br/>4232 Hagenberg im Mühlkreis'
        + '<br/><br/><a target="_blank" href="https://www.openstreetmap.org/directions?from=&to=48.37046%2C14.51391">Route hierhin</a>');
        
    L.marker([48.37042, 14.51391]).addTo(map)
        .bindPopup('RISC Software GmbH<br/>Softwarepark 32a<br/>4232 Hagenberg im Mühlkreis'
        + '<br/><br/><a target="_blank" href="https://www.openstreetmap.org/directions?from=&to=48.37046%2C14.51391">Route hierhin</a>');
        

})(L);
