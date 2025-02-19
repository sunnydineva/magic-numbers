// const API_KEY = "AIzaSyAgfZhcbUTjX4Sy8SFAcf_fj0TwMFLfyQQ"
const API_KEY = "AIzaSyAfmfRd1F3K3g0R5t5d4GPEJNs8-cu8qDE"


function loadGoogleMaps() {
    return new Promise((resolve, reject) => {
        if (window.google && window.google.maps) {
            resolve(window.google.maps);
            return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
        script.async = true;
        script.defer = true;

        script.onload = () => resolve(window.google.maps);
        script.onerror = (error) => reject(error);

        document.head.appendChild(script);
    });
}
function initMap() {
    const mapElement = document.getElementById("map");

    if (!mapElement) {
        console.error("Element with id 'map' not found!");
        return;
    }

    const map = new google.maps.Map(mapElement, {
        zoom: 15
    });

    geocodeAddress("5WX4+WW Варна", map);
}

function geocodeAddress(address, map) {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
            map.setCenter(results[0].geometry.location);
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            console.error("Geocoding failed: " + status);
        }
    });
}

loadGoogleMaps().then(() => {
    initMap();
}).catch(error => console.error("Google Maps API failed to load:", error));