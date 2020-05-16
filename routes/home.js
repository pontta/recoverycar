var express = require('express');
var router = express.Router();

/*GET send recovery car's home coordinates JSON*/
router.get('/', function(req,res,next){
	req.app.locals.counter++;
	console.log("A GET request for home's JSON received, counter: " + req.app.locals.counter);
	res.send(req.app.locals.home);
});

// GET route to save new home coordinates
router.get('/lat:lat-lon:lon',function(req, res, next){
	req.app.locals.counter++;
	var latitude = req.params.lat;
	var longitude = req.params.lon;

	console.log("A request to save new home coordinates was received, latitude:" + latitude + ", longitude:" + longitude + ", locator counter: " + req.app.locals.counter);
	req.app.locals.home.latitude = latitude;
	req.app.locals.home.longitude = longitude;
	res.send(req.app.locals.home);

});
module.exports = router;

