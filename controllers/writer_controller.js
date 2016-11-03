var express = require('express');
var router = express.Router();
var path = require('path');
var writer = require('../models/writer.js');
var firebase = require('firebase');
var app = firebase.initializeApp({ apiKey: "AIzaSyDCLU0IiA8J_-bRcHwOdEK8qIIEqLkKf3s",
    authDomain: "creativewriter-d899e.firebaseapp.com",
    databaseURL: "https://creativewriter-d899e.firebaseio.com",
    storageBucket: "creativewriter-d899e.appspot.com",
    messagingSenderId: "1038064048502"});

var newUserEmail;

//get route -> index
router.get('/', function(req,res) {
		res.sendFile(path.join(__dirname,'../public/index.html'));
});





router.get('/newstudent', function(req,res) {
		res.redirect('/signup')
});

router.get('/studentview', function(req,res) {
		res.sendFile(path.join(__dirname,'../public/paragraph.html'));
});

router.get('/mentor', function(req,res) {
		res.sendFile(path.join(__dirname,'../public/teacher.html'));
});





//new user created
router.post('/creativewriter/newuser', function(req, res) {

	console.log(req.body)
	var newUserName = req.body.name;
	var newUserEmail = req.body.email;
	var newUserPassword = req.body.password;
	var newUserType = req.body.who;

	

	 firebase.auth().createUserWithEmailAndPassword(newUserEmail, newUserPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]



			
        if (errorCode == 'auth/weak-password') {
          console.log('The password is too weak.');
        } else {
          console.log(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });


			var colName = ['name', 'email', 'type'];
			var colVal = [newUserName, newUserEmail, newUserType];

			writer.insertInto('users', colName, colVal, function(data){
			res.redirect('/studentview')
				});


});


// existing user signin
router.post('/creativewriter/login', function(req, res) {
	
	console.log(req.body)
	var newUserName = 'place holder';
	var newUserEmail = req.body.email;
	var newUserPassword = req.body.password;
	var newUserType = 'student';
	

	

	 firebase.auth().createUserWithEmailAndPassword(newUserEmail, newUserPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]



			
        if (errorCode == 'auth/weak-password') {
          console.log('The password is too weak.');
        } else {
          console.log(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });


			var colName = ['name', 'email', 'type'];
			var colVal = [newUserName, newUserEmail, newUserType];

			writer.insertInto('users', colName, colVal, function(data){
			res.redirect('/studentview')
				});


});


// existing mentor login
router.post('/creativewriter/admin', function(req, res) {
	
	console.log(req.body)
	var newUserName = 'place holder';
	var newUserEmail = req.body.name;
	var newUserPassword = req.body.password;
	var newUserType = 'mentor';

	

	 firebase.auth().createUserWithEmailAndPassword(newUserEmail, newUserPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]

			
        if (errorCode == 'auth/weak-password') {
          console.log('The password is too weak.');
        } else {
          console.log(errorMessage);
        }
        console.log(error);

        // [END_EXCLUDE]
      });

			var colName = ['name', 'email', 'type'];
			var colVal = [newUserName, newUserEmail, newUserType];

			writer.insertInto('users', colName, colVal, function(data){
			res.redirect('/mentor')
				});
});



// student inserts paragraph
router.post('/creativewriter/paragraph', function(req, res) {
	var newUserName = 1;
	var newPost = req.body.newPost;
	console.log(newPost)


			var colName = ['user_id', 'user_input'];
			var colVal = [newUserName, newPost];

			writer.insertInto('submission', colName, colVal, function(data){
			res.redirect('/studentview')
				});

});




// router.get('/creativewriter/mentor', function(req,res) {
// 	console.log('hello')
// 	// writer.select(function(data){
// 	// 	var hbsObject = {users : data}
// 	// 	console.log(hbsObject)
// 	// 	res.render('/creativewriter/mentor', hbsObject);
// 	// });

// });




//mentor select submission
router.get('/creativewriter/teacher', function(req,res) {
console.log('hello')
	writer.select(function(data){
			
		res.render('submission', {data});
	});
});


module.exports = router;
