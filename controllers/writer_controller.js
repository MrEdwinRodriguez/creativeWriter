var express = require('express');
var router = express.Router();
var writer = require('../models/writer.js');
var firebase = require('firebase');
var app = firebase.initializeApp({ apiKey: "AIzaSyDCLU0IiA8J_-bRcHwOdEK8qIIEqLkKf3s",
    authDomain: "creativewriter-d899e.firebaseapp.com",
    databaseURL: "https://creativewriter-d899e.firebaseio.com",
    storageBucket: "creativewriter-d899e.appspot.com",
    messagingSenderId: "1038064048502"});



//get route -> index
router.get('/', function(req,res) {
		res.redirect('index')
});

router.get('/teacherlogin', function(req,res) {
		res.redirect('../public/admin')
});


router.get('/selectteacher', function(req,res) {
	//express callback response by calling burger.selectAllBurger
	writer.selectTeacher(function(teacher){
		//wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
		res.redirect('/studentview');
	});
});


//post route -> back to index
router.post('/creativewriter/newuser', function(req, res) {
	//takes the request object using it as input for buger.addBurger
	var newUserName = req.body.name;
	var newUserEmail = req.body.email;
	var newUserPassword = req.body.password;

	 firebase.auth().createUserWithEmailAndPassword(newUserEmail, newUserPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]

        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });

// replace name from models into insertStudents
	writer.insertStudents(['name', 'email'], [newUserName, newUserEmail], function(data){
		res.redirect('/studentview')
	});

});

router.post('/creativewriter/studentview', function(req, res) {
	//takes the request object using it as input for buger.addBurger
	var newPost = req.body.newPost;

// replace name from models into submission
	writer.submission(['name'], [newPost], function(data){
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




module.exports = router;
