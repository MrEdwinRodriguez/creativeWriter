var orm = require ('../config/orm.js')


var writer = {

	selectStudent: function(cb) {
		orm.selectStudent('students', function(res){
			cb(res);
		});
	},

	selectComments: function(cb) {
		orm.selectComments('comments', function(res){
			cb(res);
		});
	},

	selectSubmission: function(cb) {
		orm.selectSubmission('submission', function(res){
			cb(res);
		});
	},	

	insertStudents: function(name, email, cb) {
		orm.insertStudents('students', name, email, function(res){
			cb(res);
		});
	},

	submission: function(writing, cb) {
		orm.submission('submission', writing, function(res){
			cb(res);
		});
	},

	comments: function(mentor_comment, students_id, submissin_id, cb) {
		orm.comments('comments', mentor_comment, students_id, submissin_id,  function(res){
			cb(res);
		});
	}	

}

module.exports = writer;