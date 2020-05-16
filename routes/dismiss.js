var express = require('express');
var router = express.Router();

/*GET route to dismiss recovery car to home JSON*/
router.get('/', function(req,res,next){
	req.app.locals.counter++;
	console.log("A GET request for recovery car's dismissal to home received");
	req.app.locals.destination.latitude = req.app.locals.home.latitude;
	req.app.locals.destination.longitude = req.app.locals.home.longitude;
	res.send(req.app.locals.destination);
});

module.exports = router;

