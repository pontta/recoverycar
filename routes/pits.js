var express = require('express');
var router = express.Router();

/*GET send recovery car's pits coordinates JSON*/
router.get('/', function(req,res,next){
	req.app.locals.counter++;
	console.log("A GET request for pits's JSON received");
	res.send(req.app.locals.pits);
});

// GET route to save new pits coordinates
router.get('/lat:lat-lon:lon',function(req, res, next){
	req.app.locals.counter++;
	var latitude = req.params.lat;
	var longitude = req.params.lon;

	console.log("A request to save new pits coordinates was received, latitude:" + latitude + ", longitude:" + longitude + ", locator counter: " + req.app.locals.counter);
	req.app.locals.pits.latitude = latitude;
	req.app.locals.pits.longitude = longitude;
	res.send(req.app.locals.pits);

});
module.exports = router;

