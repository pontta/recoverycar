var x = document.getElementById("destination");
var xmlhttp = new XMLHttpRequest();

function dismiss() {
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			info = JSON.parse(this.responseText);
			console.log("Received home JSON: " + JSON.stringify(info) );
			x.innerHTML = "Latitude: " + info.latitude + "<br>Longitude: " + info.longitude;
		}
	};
	xmlhttp.open("GET", "./dismiss", true);
	xmlhttp.send(); 

}
