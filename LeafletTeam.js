function myFunction(){
    var map = L.map('map').setView([45.5, -122.6], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var Slope = L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/S-687b640df0014a079c6ad87ab7296213/wms?', {
layers: 'Countries_WGS84 Countries_WGS84', //Title name
format: 'image/png', //depends on what you want to load in
transparent: true,
}).addTo(map);
  
var DEM = L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-687b640df0014a079c6ad87ab7296213/wms?', {
layers: 'World_Cities World_Cities', //Title name
format: 'image/png', //depends on what you want to load in
transparent: true,
}).addTo(map);
  
var Roads = L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-687b640df0014a079c6ad87ab7296213/wms?', {
layers: 'World_Cities World_Cities', //Title name
format: 'image/png', //depends on what you want to load in
transparent: true,
}).addTo(map);
  
var Water = L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-687b640df0014a079c6ad87ab7296213/wms?', {
layers: 'World_Cities World_Cities', //Title name
format: 'image/png', //depends on what you want to load in
transparent: true,
}).addTo(map);

}
