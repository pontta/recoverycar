var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
var request = require('request');
var qr = require('qr-image');
var fs = require('fs');
var os = require('os');

var indexRouter = require('./routes/index'); //done
var destinationRouter = require('./routes/destination'); //done
var dismissRouter = require('./routes/dismiss'); //done
var pitsRouter = require('./routes/pits'); //done
var homeRouter = require('./routes/home'); //done
var positionRouter = require('./routes/position'); //done
var getInfoRouter = require('./routes/getInfo'); //done


var app = express();

app.locals.counter = 0; //used to follow the number of actions carried in locator.js
app.locals.destination = {"latitude":0,"longitude":0}; //JSON for storing set destination coordinates"
app.locals.pits = {"latitude":0,"longitude":0}; //JSON for storing set pits coordinates"
app.locals.home = {"latitude":0,"longitude":0}; //JSON for storing set home coordinates"
app.locals.position = {"latitude":0,"longitude":0}; //JSON for storing location of recovery car coordinates"
app.locals.state = {"0":"Idle", "1":"coming up", "2":"returning home", "state":0};

app.locals.infoJSON = {"counter":app.locals.counter, "state":app.locals.state, "destination":app.locals.destination, "pits":app.locals.pits, "home":app.locals.home, "position":app.locals.position};

app.locals.host = "127.0.0.1";

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/destination', destinationRouter);
app.use('/dismiss', dismissRouter);
app.use('/pits', pitsRouter);
app.use('/home', homeRouter);
app.use('/position', positionRouter);
app.use('/getInfo', getInfoRouter);

app.locals.counter ++;
console.log(app.locals.counter);

// update info JSON
updateInfoJSON();

function updateInfoJSON(){
    app.locals.infoJSON = {"counter":app.locals.counter, "state":app.locals.state, "destination":app.locals.destination, "pits":app.locals.pits, "home":app.locals.home, "position":app.locals.position};
    setTimeout(updateInfoJSON, 500);
}
/*
setInterval(()=>{
	console.log("home location latitude: " + app.locals.home.latitude + " longitude: " + app.locals.home.longitude);
	},1000);
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

