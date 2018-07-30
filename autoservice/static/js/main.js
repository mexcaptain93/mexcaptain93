$(function () {
    mainSlider();
    indexMap();
});

function mainSlider() {
    var slider = $('.js-main-slider');

    if (slider.length) {
        slider.slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
        });
    }
}

function indexMap() {
    var mapElement = $('.js-index-map');
    if (mapElement.length) {
        coordinates = ['59.9468003', '30.4590646'];


        // markerImage = '/static/img/general/map-marker.png';
        popupContent = '<p class="map-content">Автосервис Кузнецов</p>';

        var myLatlng = new google.maps.LatLng(parseFloat(coordinates[0]), parseFloat(coordinates[1]));

        var marker = new google.maps.Marker({
            position: myLatlng,
            // icon: markerImage
        });


        infowindow = new google.maps.InfoWindow({
            content: popupContent
        });

        marker.addListener('mouseover', function () {
            infowindow.open(map, marker);
        });

        marker.addListener('mouseout', function () {
            infowindow.close(map, marker);
        });


        map = new google.maps.Map(mapElement[0], {
            center: {lat: parseFloat(coordinates[0]), lng: parseFloat(coordinates[1])},
            zoom: 12,
            scrollwheel: false,
            zoomControl: true,
            disableDefaultUI: true,
        });


        if (marker) {
            marker.setMap(map);
        }
    }


}