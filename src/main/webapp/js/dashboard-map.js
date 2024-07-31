// Define a custom marker class
class CustomMarker extends tt.Marker {
    constructor(options) {
        super(options);
        this._createCustomContent();
    }

    _createCustomContent() {
        const iconUrl = "/images/img_2.png";
        // const htmlContent = `<div style="width: 40px; height: 40px; background-image: url(${iconUrl});"></div>`;
        const htmlContent = `<div><img src=${iconUrl} style="height:36px")></div>`;
        this.getElement().innerHTML = htmlContent;
    }
}

// Initialize the map
var map = tt.map({
    key: 'PGw39rW1uV5vGk2GhGeZlXZ3NVdWYfNC',
    container: 'map'
}).setZoom(10);

// Add controls
map.addControl(new tt.FullscreenControl());
map.addControl(new tt.NavigationControl());

var bounds = new tt.LngLatBounds();

locations.forEach(function(location) {
    bounds.extend([location.longitude, location.lat]);
    var marker = new CustomMarker().setLngLat([location.longitude, location.lat]).addTo(map);
});

map.fitBounds(bounds, { padding: 50 });
