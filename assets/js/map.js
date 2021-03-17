const locationSelect = document.getElementById('location-select');
const markers = [];

const myCoordinates = { 
    "bigBenCoords" : {
    "lat": 51.5007, 
    "lng": -0.1246},

    "westminsterAbbeyCoords" : {
      "lat":51.4987, 
      "lng":-0.1289},

    "buckinghamPalaceCoords" : 
    {"lat":51.5014, 
    "lng":-0.1419},

    "theShardCoords" : 
    {"lat":51.5045, 
    "lng":-0.0865},

    "towerOfLondonCoords" : 
    {"lat":51.5081, 
    "lng":-0.0759},

    "towerBridgeCoords" : 
    {"lat":51.5055, 
    "lng":-0.0754},

    "londonEyeCoords" : 
    {"lat":51.5033, 
    "lng":-0.1196},

    "kensingtonPalaceCoords" : 
    {"lat":51.5050, 
    "lng":-0.1877},

    "britishMuseumCoords" : 
    {"lat":51.5194, 
    "lng":-0.1270},

    "vAndAMuseumCoords" : 
    {"lat":51.4966, 
    "lng":-0.1722},

    "naturalHistoryMuseumCoords" : 
    {"lat":51.4967, 
    "lng":-0.1764},

    "scienceMuseumCoords" : 
    {"lat":51.4978, 
    "lng":-0.1745},

    "britishTransportMuseumCoords" : 
    {"lat":51.5119, 
    "lng":-0.1216},

    "stPaulsCoords" : 
    {"lat":51.5138, 
    "lng":-0.0984},

    "londonZooCoords" : 
    {"lat":51.5353, 
    "lng":-0.1534},
    
    "londonAquariumCoords" : {"lat":51.5020, "lng":-0.1192},
    "maritimeMuseumCoords" : {"lat":51.481111, "lng":-0.005556},
    "royalObservatoryCoords" : {"lat":51.4769, "lng":-0.0005},
    "greenwichParkCoords" : {"lat":51.4769, "lng":-0.0015},
    "cuttySarkCoords" : {"lat":51.4817, "lng":-0.0108},
    "hydeParkCoords" : {"lat":51.5073, "lng":-0.1657},
    "regentsParkCoords" : {"lat":51.5313, "lng":-0.1570},
    "hollandParkCoords" : {"lat":51.5032, "lng":-0.2037},
    "greenParkCoords" : {"lat":51.5039, "lng":-0.1439},
    "stJamesParkCoords" : {"lat":51.5025, "lng":-0.1348},
    "boroughMarketCoords" : {"lat":51.5055, "lng":-0.0910},
    "greenwichMarketCoords" : {"lat":51.4816, "lng":-0.0090},
    "portobelloRoadMarketCoords" : {"lat":51.5209, "lng":-0.2091},
    "camdenMarketCoords" : {"lat":51.5414, "lng":-0.1465},
    "spitalfieldsMarketCoords" : {"lat":51.5197, "lng":-0.0755},
    "camdenMarketCoords" : {"lat":51.5414, "lng":-0.1465},
    "trafalgerSquareCoords" : {"lat":51.5080, "lng":-0.1283},
    "nationalGalleryCoords" : {"lat":51.5089, "lng":-0.1283},
    "coventGardenMarketCoords" : {"lat":51.5123,"lng":-0.1230}
};

function removeMarkers() {
  markers.forEach(marker => {
    marker.setMap(null); // Disconnect each marker.
  });

  markers.length = 0; // This empties the array.
}

function createMarker(coordinates, map) {
  const marker = new google.maps.Marker({
    position: coordinates,
    map
  });

  markers.push(marker); // Add the marker to the array to save the reference.
}

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: {
      lat: 51.509865,
      lng:  -0.118092
    }
  });

  locationSelect.addEventListener('change', () => {
    const location = locationSelect.value;
    const coordinates = myCoordinates[location];

    removeMarkers(); // First remove all markers.
    createMarker(coordinates, map); // Then add the marker.
  });
}