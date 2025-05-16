// Maak een Leaflet-map met standaard marker
let mapP = L.map('mapP1').setView([51.0424221, 3.7258331], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapP);

// Voeg een standaard marker toe
L.marker([51.0424221, 3.7258331]).addTo(mapP);
