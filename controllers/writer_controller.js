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
		res.redirect('/public/login')
});

router.get('/teacherlogin', function(req,res) {
		res.redirect('/teacherlogin')
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

INSERT INTO students (name,email)
VALUES (newUserName,newUserEmail);

});

router.post('/creativewriter/studentview', function(req, res) {
	//takes the request object using it as input for buger.addBurger
	var newPost = req.body.newPost;

INSERT INTO submission (student_input)
VALUES (newPost);

});


router.post('/creativewriter/teacherview', function(req, res) {
	//takes the request object using it as input for buger.addBurger
	var newComment = req.body.comment;

INSERT INTO comments (comments_mentor_comment)
VALUES (newComment);

});



//put route -> back to index
router.put('/burgers/update', function(req,res){
	burger.update(req.body.burger_id, function(result){
		//wrapper for orm.js that using MySQL update callback will return a log to console, render back to index with handle
		console.log(result);
		res.redirect('/');
	});
});

module.exports = router;
