var xmlhttpSetDestination = new XMLHttpRequest();
var destination = document.getElementById("destination");
var information = document.getElementById("status");



function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setDestination, locationError, {'enableHighAccuracy':true});
  } else { 
    destination.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function locationError(error){
    console.log(error);
    destination.innerHTML = "Location Error"
}

function setDestination(position) {

	xmlhttpSetDestination.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			info = JSON.parse(this.responseText);
		}
	};
	
	xmlhttpSetDestination.open("GET", "./destination/lat" + position.coords.latitude + "-lon" + position.coords.longitude, true);
	
	xmlhttpSetDestination.send(); 
	
	destination.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    information.innerHTML = position.coords.accuracy;
}
