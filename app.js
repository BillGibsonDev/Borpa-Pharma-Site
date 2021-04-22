let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.71455, lng: -74.00712 },
        zoom: 14,
        mapTypeId: 'hybrid'
    });
}