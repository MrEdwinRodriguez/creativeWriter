var orm = require ('../config/orm.js')


var writer = {

	selectAll: function(cb) {
		orm.selectAll('burgers', function(res){
			cb(res);
		});
	},
	
	insertStudents: function(cols, vals, cb) {
		orm.insertStudents('students', cols, vals, function(res){
			cb(res);
		});
	},

	submission: function(cols, vals, cb) {
		orm.submission('submission', cols, vals, function(res){
			cb(res);
		});
	},

	comments: function(cols, vals, cb) {
		orm.comments('comment', cols, vals, function(res){
			cb(res);
		});
	},	

	updateOne: function(objColVals, condition, cb) {
		orm.updateOne('burgers', objColVals, condition, function(res){
			cb(res);
		});
	}


}

module.exports = writer;