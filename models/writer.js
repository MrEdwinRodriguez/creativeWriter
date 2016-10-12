var orm = require ('../config/orm.js')


var writer = {

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

	insertSubmission: function(student, text, cb) {
		orm.insertSubmission('submission', ['user_id', 'user_input'], [student, text], cb);	
	},

	insertComments: function(mentor, submission, comment, cb) {
		orm.insertComments('comments', ['user_id', 'submission_id', 'comments'], [mentor, submission, comment], cb);	
	}	

}

module.exports = writer;