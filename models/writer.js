var orm = require('../config/orm.js');

var writer = {
	selectTeacher: function(cb) {
		orm.all('burgers', function(res){
			cb(res)
		});
	},
	selectStudent: function(cb) {
		orm.all('burgers', function(res){
			cb(res)
		});
	},	
	createParagraph: function(studnetID,teacherID, paragraph, cb) {
		orm.create('assignments', ['burger_name', 'devoured'], [name, false], cb);
	},
	createComment: function(studnetID, teacherID, paragraph, comment, cb) {
		orm.create('assignments', ['student_name', 'teacher_name', 'writing'], [name, false], cb);
	},
	update: function(id, cb) {
		var condition = 'id=' + id;
		orm.update('burgers', {devoured : true}, condition, cb);
	}
};

module.exports = writer;