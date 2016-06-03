#!/usr/bin/env node

var csv  = require('csv'),
    path = require('path'),
    pg     = require('pg'),

    config = require('../config'),

    invs   = require('../lib/invitations');

console.log('querying all invitations!');
queryAllInvitations();

function queryAllInvitations() {
    pg.connect(config.database, function (err, db, done) {
        console.log("connected!");
        if (err) {console.log(err)}
        db.query("SELECT * FROM invitations;", function (err, results) {
            if (err) {console.log(err)}
            done();
            console.log(results);
            process.exit(1);
        });
    });
}
