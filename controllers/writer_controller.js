var express = require('express');
var router = express.Router();
var path = require('path');
var writer = require('../models/writer.js');
var firebase = require('firebase');
var jwt = require('jsonwebtoken');
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

// router.get('/studentview', function(req,res) {
// 		res.sendFile(path.join(__dirname,'../public/paragraph.html'));
// });

router.get('/mentor', function(req,res) {
		res.sendFile(path.join(__dirname,'../public/teacher.html'));
});

router.get("/studentview", function(req, res) {
    // res.sendfile(__dirname + "../public/signup.html");
    res.sendFile(path.join(__dirname, '../views/paragraph.html'));
});

// router.get("/studentview", function(req, res) {
//     // res.sendfile(__dirname + "../public/signup.html");
//     res.sendFile(path.join(__dirname, '../public/paragraph.html'));
// });
// router.get('/studentview', function(req, res) {
//     res.sendFile(path.join(__dirname, '../views/studentview/paragraph.html'));
// });





//new user created
router.post('/creativewriter/newuser', function(req, res) {

	console.log(req.body)
	var newUserName = req.body.name;
	var newUserEmail = req.body.email;
	var newUserPassword = req.body.password;
	var newUserType = req.body.who;

console.log('line 48')	

	 firebase.auth().createUserWithEmailAndPassword(newUserEmail, newUserPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]

console.log('line 56')

			
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
	var userName = 'place holder';
	var userEmail = req.body.email;
	var userPassword = req.body.password;
	var userType = 'student';
	

	

	 // firebase.auth().createUserWithEmailAndPassword(newUserEmail, newUserPassword).catch(function(error) {
	 firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {	
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

    if (userEmail) 
        console.log('checking if')
        email = userEmail;

        // console.log(uid)
        var colName = ['email'];
        var colVal = [email];
        // var colVal = [newUserName, newUserEmail, newUserType];
        console.log('calling db')

        writer.select('users', colName, colVal, function(user) {
            console.log(user)

            user = user[0];
            console.log(user)
            console.log('user name ' + user.name)

            req.session.user_id = user.id;
            // req.session.fb_user_id = user.uid;
            req.session.firstname = user.name;
            // req.session.last_name = user.lastname;
            // req.session.user_email = user.email;

            console.log(user.email);
            var token = jwt.sign({
                password_hash: user.password_hash
            }, 'password', {
                expiresIn: 60 * 60 * 15
            })

            console.log("Token")
            console.log(token)

            console.log(user)
            console.log(user.id)

            // pulls audio from user while they loging

                res.render('studentview/', {

                    title: 'User Dashboard',
                    title_tag: 'manage your sites and devices',
                    user: user,

                });

        


        });


    });




// ///////////////////////old code below
			// var colName = ['name', 'email', 'type'];
			// var colVal = [newUserName, newUserEmail, newUserType];

			// writer.insertInto('users', colName, colVal, function(data){
			// res.redirect('/studentview')
			// 	});
//////////////////////////////			// 


// });


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
			console.log(colVal)
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




//mentor select submission
router.get('/creativewriter/teacher', function(req,res) {
console.log('hello')
	writer.select(function(data){
			
		res.render('submission', {data});
	});
});


module.exports = router;
