var orm = require('../config/orm.js')


var writer = {

    // select: function(cb) {
    select: function(table, col, val, cb) {
        orm.user(table, col, val, function(res) {
            cb(res);
        });
    },

    selectAll: function(table, col, val, cb) {
        orm.all(table, function(res) {
            cb(res);
        });
    },

    selectSubmission: function(cb) {
        orm.all('submission', function(res) {
            cb(res);
        });
    },

    insertInto: function(table, col, val, cb) {
        orm.create(table, col, val, cb);
    },



}

module.exports = writer;
