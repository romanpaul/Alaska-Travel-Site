function initMap() {
  var uluru = {lat: 55.357695, lng: -131.674712};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: uluru,
      gestureHandling: 'cooperative',
      scrollwheel: false,
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}