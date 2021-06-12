let map;

function initMap() {
    const myLatLng = { lat: 40.71455, lng: -74.00712 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: myLatLng,
        mapTypeId: 'hybrid'
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Our Research Center",
    });
}