var xmlhttp = new XMLHttpRequest();

function getLocationPits() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPits);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function setPits(position) {
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			info = JSON.parse(this.responseText);
			console.log("Received info JSON: " + JSON.stringify(info) );
		}
	};
	xmlhttp.open("GET", "./pits/lat" + position.coords.latitude + "-lon" + position.coords.longitude, true);
	xmlhttp.send(); 

}
