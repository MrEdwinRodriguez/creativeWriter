var express = require('express');
var router = express.Router();
var path = require('path');
var writer = require('../models/writer.js');



// mentor selects student
router.get('/getstudentlist', function(req,res) {
console.log('hello')
		writer.select(function(data){
		console.log(data)
		res.json(data);
		
	});

  });

module.exports = router;