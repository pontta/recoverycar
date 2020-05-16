var express = require('express');
var router = express.Router();

/*GET send recovery car's destination coordinates JSON*/
router.get('/', function(req,res,next){
	req.app.locals.counter++;
	console.log("A GET request for recovery car's JSON received");
	res.send(req.app.locals.location);
});

// GET route to save new destination coordinates
router.get('/lat:lat-lon:lon',function(req, res, next){
	req.app.locals.counter++;
	var latitude = req.params.lat;
	var longitude = req.params.lon;

	console.log("A request to save new destination coordinates was received, latitude:" + latitude + ", longitude:" + longitude + ", locator counter: " + req.app.locals.counter);
	req.app.locals.location.latitude = latitude;
	req.app.locals.location.longitude = longitude;
	res.send(req.app.locals.location);

});
module.exports = router;

