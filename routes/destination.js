var express = require('express');
var router = express.Router();

/*GET send recovery car's destination coordinates JSON*/
router.get('/', function(req,res,next){
	req.app.locals.counter++;
	console.log("A GET request for recovery car's destination JSON received, counter: " + req.app.locals.counter);
	res.send(req.app.locals.destination);
});

// GET route to save new destination coordinates
router.get('/lat:lat-lon:lon',function(req, res, next){
	req.app.locals.counter++;
	var latitude = req.params.lat;
	var longitude = req.params.lon;

	console.log("A request to save new destination coordinates was received, latitude:" + latitude + ", longitude:" + longitude + ", counter: " + req.app.locals.counter);
	req.app.locals.destination.latitude = latitude;
	req.app.locals.destination.longitude = longitude;
	res.send(req.app.locals.destination);

});
module.exports = router;

