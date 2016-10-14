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

router.get('/mentorlogin', function(req,res) {
		res.redirect('/admin')
});

router.get('/studentlogin', function(req,res) {
		res.redirect('/login')
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


// user signin
router.post('/creativewriter/signin', function(req, res) {
	
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

router.post('/creativewriter/admin', function(req, res) {
	
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
			res.redirect('/mentor')
				});


});



// insert comments
router.post('/creativewriter/paragraph', function(req, res) {

	
	var newPost = req.body.newPost;
	console.log(newPost)
	console.log(newUserEmail)


			

			// var colName = ['user_id', 'user_input'];
			// var colVal = [newUserName, newPost];

			// writer.insertInto('users', colName, colVal, function(data){
			// res.redirect('/studentview')
			// 	});


});








router.post('/creativewriter/studentview', function(req, res) {
	//takes the request object using it as input for buger.addBurger
	var newPost = req.body.newPost;

// replace name from models into submission
	writer.submission(['student_input'], [newPost], function(data){
		res.redirect('/studentview')
	});

});


router.post('/creativewriter/teacherview', function(req, res) {
	//takes the request object using it as input for buger.addBurger
	var newComment = req.body.comment;

// replace name from models into submission
	writer.comments(['comments_mentor_comment'], [newComment], function(data){
		res.redirect('/teacherview')
	});

});

// student selects comment from mentor to read
router.get('/studentview', function(req,res) {
	writer.selectComment(function(data){
		var hbsObject = {writer : data}
		console.log(hbsObject)
		res.render('studentview/comments', hbsObject);

	writer.selectComments('SELECT FROM comments', function(err, res) {
    if (err) throw err;
    console.log(res);
})

	});
});


// mentor selects student
router.get('/teacherview/studentselect', function(req,res) {
	writer.selectSubmission(function(data){
		var hbsObject = {writer : data}
		console.log(hbsObject)
		res.render('teacherview/submission', hbsObject);

	writer.selectStudent('SELECT FROM user', function(err, res) {
    if (err) throw err;
    console.log(res);
})

	});
});



// mentor selects writing from student
router.get('/teacherview', function(req,res) {
	writer.selectSubmission(function(data){
		var hbsObject = {writer : data}
		console.log(hbsObject)
		res.render('teacherview/submission', hbsObject);

	writer.selectSubmission('SELECT FROM submission', function(err, res) {
    if (err) throw err;
    console.log(res);
})

	});
});




module.exports = router;
