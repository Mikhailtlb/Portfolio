// Maak een Leaflet-map met standaard marker voor AP Hogeschool Campus Ellermanstraat
let mapP = L.map('mapP1').setView([51.230050, 4.417340], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapP);

// Voeg een standaard marker toe op de campuslocatie met popup
L.marker([51.230050, 4.417340]).addTo(mapP)
  .bindPopup("AP Hogeschool - Campus Ellermanstraat")
  .openPopup();
