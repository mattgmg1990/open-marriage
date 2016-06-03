var dbm  = require('db-migrate'),
    type = dbm.dataType;

exports.up = function (db, callback) {
    db.removeColumn('invitations', 'has_children', callback);
    db.addColumn('invitations', 'mailing_address', {
        type        : 'text',
        notNull     : false
    }, callback);
    db.addColumn('invitations', 'name', {
        type        : 'text',
        notNull     : false
    }, callback);
};

exports.down = function (db, callback) {
    db.addColumn('invitations', 'has_children', {
        type        : 'boolean',
        defaultValue: true,
        notNull     : true
    }, callback);
    db.removeColumn('invitations', 'mailing_address', callback);
    db.removeColumn('invitations', 'name', callback);
};
