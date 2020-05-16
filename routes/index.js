var express = require('express');
var router = express.Router();

/* GET Locator home page. */
router.get('/', function(req, res, next) {
	var state = req.app.locals.state[req.app.locals.state.state];

	req.app.locals.host = req.headers.host; //get Locator hostname.

	req.app.locals.counter ++;
	console.log("Locator counter: " + req.app.locals.counter);

	var messagetext = "jutun juuri";
	res.render('index', {message:messagetext});
	});

module.exports = router;

