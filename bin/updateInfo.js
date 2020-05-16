/* Make GET request to fetch info-JSON from backend and show information on screen*/    
var destination = document.getElementById("destination");

var text = "";
var info; //empty holder
updateInfo();
getUserPosition();

function updateInfo(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			info = JSON.parse(this.responseText);
			console.log("Received destination JSON: " + JSON.stringify(info) );
			destination.innerHTML = "Latitude: " + info.destination.latitude + "<br>Longitude: " + info.destination.longitude;
            
            //update map point positions
            updateMap('positionPoint',info.position); //function from map2.js
            updateMap('destinationPoint',info.destination);
            updateMap('homePoint',info.home);
            updateMap('pitsPoint',info.pits);
		}
	};
	xmlhttp.open("GET", "./getInfo", true);
	xmlhttp.send(); 
	
    setTimeout(updateInfo,500); //make function call itself
}


function getUserPosition() { //this function updates user's own location on map
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showUserPosition, locationError, {'enableHighAccuracy':true});
    } else { 
        destination.innerHTML = "Geolocation is not supported by this browser.";
    }

}

function locationError(error){
    console.log(error);
    destination.innerHTML = "Location Error"
}

function showUserPosition(position) {
            updateMap('userPoint',{'latitude': position.coords.latitude, 'longitude': position.coords.longitude}); //function from map2.js

}
