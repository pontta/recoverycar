var express = require('express');
var router = express.Router();

/*GET send recovery car's position coordinates JSON*/
router.get('/', function(req,res,next){
	req.app.locals.counter++;
	console.log("A GET request for position JSON received, counter: " + req.app.locals.counter);
	res.send(req.app.locals.position);
});

// GET route to save new home coordinates
router.get('/lat:lat-lon:lon',function(req, res, next){
	req.app.locals.counter++;
	var latitude = req.params.lat;
	var longitude = req.params.lon;

	console.log("A request to save new position coordinates was received, latitude:" + latitude + ", longitude:" + longitude + ", locator counter: " + req.app.locals.counter);
	req.app.locals.position.latitude = latitude;
	req.app.locals.position.longitude = longitude;
	res.send(req.app.locals.position);

});
module.exports = router;

