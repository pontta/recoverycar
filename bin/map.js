/*
var xmlhttp = new XMLHttpRequest();
var longitude = "";
var latitude = "";

xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		info = JSON.parse(this.responseText);
		console.log("Received destination JSON: " + JSON.stringify(info) );
		longitude = info.longitude;
        latitude = info.latitude;
        console.log(longitude);
        console.log(latitude);
  */      
        var attribution = new ol.control.Attribution({
            collapsible: false
        });

        var map = new ol.Map({
            controls: ol.control.defaults({ attribution: false }).extend([attribution]),
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM({
                        url: 'https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}.png',
                        attributions: [ol.source.OSM.ATTRIBUTION, 'Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>'],
                        maxZoom: 18
                    })
                })
            ],
            target: 'map',
            view: new ol.View({
                center: ol.proj.fromLonLat([4.35247, 50.84673]),
                maxZoom: 18,
                zoom: 12
            })
        });

        var layer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [
                    new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([4.35247, 50.84673]))
                    }),   new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([4.35240, 50.84665]))
                    })
                ]
            }),
		name: 'Marker'
        });
        map.addLayer(layer);
        /*
	}
};
xmlhttp.open("GET", "./destination", true);
xmlhttp.send(); */