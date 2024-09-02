import { Loader } from "@googlemaps/js-api-loader";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

// Initialize the map variable
let map;

// Load the Google Maps API
const loader = new Loader({
  apiKey: "AIzaSyB_T6ie9BLZc60McVcwoWdUM4jYq7mZ7Ns", 
  version: "weekly",
});

loader.load().then(() => {
  window.initMap();
});

// Initialize the map and add markers
window.initMap = async function () {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });

  // Define marker labels and locations
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const locations = [
    { lat: 40.785091, lng: -73.968285 },
    { lat: 41.084045, lng: -73.874245 },
    { lat: 40.754932, lng: -73.984016 },
  ];

  // Create markers
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  // Use the latest MarkerClusterer
  new MarkerClusterer({ map, markers });
};
