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
		orm.insertStudents('students', ['name', 'email'], [name, email], cb);	
	},

	submission: function(writing, cb) {
		orm.submission('submission', ['student_input'], [writing], cb);	
	},

	comments: function(mentor, student, submission, cb) {
		orm.comments('comments', ['mentor_id', 'submission_id', 'mentor_input'], [mentor, student, submission], cb);	
	}	

}

module.exports = writer;