mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: coordinates, // starting position [lng, lat]
  zoom: 10, // starting zoom
});

console.log("hohohohohohohoho",coordinates);  //check in browser console only for new added listing
const popup = new mapboxgl.Popup({ offset: 25 })
  .setHTML(`
    <h5>${listingTitle}</h5>
    <p>${listingLocation}</p>
  `);

const marker = new mapboxgl.Marker()
  .setLngLat(coordinates) // listing.geometry.coordinates
   .setPopup(popup)
  .addTo(map);
