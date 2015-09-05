var ajax = require('ajax');

// Construct URL
var lat;
var lon;

setInterval(findLocation, 10000);

function findLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function handleResponse(response) {
  var direction = response.direction;
  var distance = response.distance;
  console.log(direction,distance);
  //Pebble.sendMessage();
}

function showPosition(position) {
//     lat = String(position.coords.latitude).replace(".","p");
//     lon = String(position.coords.longitude).replace(".","p");
    lat = String("40.0174031").replace(".","p");
    lon = String("-105.2833811").replace(".","p");
    var URL = ['https://turnakitmapper.herokuapp.com/direction/', lat, '&', lon].join("");
    ajax(
    {
      url: URL,
      type: 'json'
    },
    handleResponse,
    handleResponse
    );
}
