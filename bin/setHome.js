var xmlhttp = new XMLHttpRequest();


function getLocationHome() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setHome);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function setHome(position) {
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			info = JSON.parse(this.responseText);
			console.log("Received info JSON: " + JSON.stringify(info) );
		}
	};
	xmlhttp.open("GET", "./home/lat" + position.coords.latitude + "-lon" + position.coords.longitude, true);
	xmlhttp.send(); 

}
