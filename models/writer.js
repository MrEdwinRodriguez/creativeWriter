var orm = require ('../config/orm.js')


var writer = {

	selectComments: function(cb) {
		orm.selectComments('comments', function(res){
			cb(res);
		});
	},

	selectSubmission: function(cb) {
		orm.all('submission', function(res){
			cb(res);
		});
	},	

	insertUsers: function(name, email, type, cb) {
		orm.create('users', ['name', 'email', 'type'], [name, email, type], cb);	
	},

	insertSubmission: function(student, text, cb) {
		orm.create('submission', ['user_id', 'user_input'], [student, text], cb);	
	},

	insertComments: function(mentor, submission, comment, cb) {
		orm.create('comments', ['user_id', 'submission_id', 'comments'], [mentor, submission, comment], cb);	
	}	

}

module.exports = writer;