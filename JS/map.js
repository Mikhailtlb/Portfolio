// Maak een Leaflet-map met standaard marker voor AP Hogeschool Campus Ellermanstraat
let map = L.map('map').setView([51.23009, 4.41616], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Voeg een standaard marker toe op de campuslocatie met popup
L.marker([51.230050, 4.417340]).addTo(map)
  .bindPopup("AP Hogeschool - Campus Ellermanstraat")
  .openPopup();
