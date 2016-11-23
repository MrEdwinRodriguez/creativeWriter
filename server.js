

// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');
var multer = require('multer');


//tells not to create express server
var app = express(); 

// sets initial port
var PORT = process.env.PORT || 8080; 

// BodyParser makes it easy for our server to interpret data sent to it.


app.use(express.static(process.cwd() + '/public'));

// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(multer().any());


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// require('./routes/api-routes.js')(app);
// require('.routes/html-routes.js')(app);
var writer = require('./controllers/writer_controller');
var creativewriter = require('./controllers/creativewriter')
app.use('/', writer);
app.use('/creativewriter', creativewriter);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
	console.log("The server is listening: " + PORT);
});


