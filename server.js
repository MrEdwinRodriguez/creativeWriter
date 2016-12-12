

// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');
var multer = require('multer');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var exphbs = require('express-handlebars');


//tells not to create express server
var app = express(); 

// sets initial port
var PORT = process.env.PORT || 8080; 

// BodyParser makes it easy for our server to interpret data sent to it.


app.use(express.static(process.cwd() + '/public'));

// this sets folder where views will live
app.set('views', path.join(__dirname, 'views'));

// established views engine and allows to use .html instead of .handlebars
app.engine('html', exphbs({
    defaultLayout: 'main',
    extname: '.html'
}));
app.set('view engine', 'html');



// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(multer().any());

// Sets JSON Web Token Secret for Encryption
app.set('jwtSecret', "password2");



app.use(session({
    name: 'sb',
    secret: 'password',
    resave: true,
    saveUninitialized: true,
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    httpOnly: true,
    secure: true,
    ephemeral: true,
    store: new FileStore()
}));


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


