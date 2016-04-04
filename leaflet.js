

var map = L.map('mapid').setView([-36.8747974,174.7804335], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'jshi.pbjfa85m',
    accessToken: 'pk.eyJ1IjoianNoaSIsImEiOiJjaW1ndTJjNGYwMDdzdHprb3B3aTN6MmlzIn0.1-D6nja-qazP-LhLDSOFFg'
}).addTo(map);

$.ajax({
    type: "POST",
    url: 'https://gist.githubusercontent.com/anonymous/0fc097d2845387ab2ce0/raw/a981ff77eaca3873bcef705f5241eeab5a55b84b/bundeslaender_geojson.js',
    dataType: 'json',
    success: function (response) {
        geojsonLayer = L.geoJson(response).addTo(map);
        map.fitBounds(geojsonLayer.getBounds());
    }
});

