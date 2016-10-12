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

	insertUsers: function(name, email, type, cb) {
		orm.insertUsers('users', ['name', 'email', 'type'], [name, email, type], cb);	
	},

	submission: function(student, text, cb) {
		orm.submission('submission', ['student_id', 'student_input'], [student, text], cb);	
	},

	comments: function(mentor, submission, comment, cb) {
		orm.comments('comments', ['mentor_id', 'submission_id', 'mentor_input'], [mentor, submission, comment], cb);	
	}	

}

module.exports = writer;