#!/usr/bin/env node

var csv  = require('csv'),
    path = require('path'),
    pg     = require('pg'),

    config = require('../config'),

    invs   = require('../lib/invitations');

dropTables();

function dropTables() {
    pg.connect(config.database, function (err, db, done) {
            if (err) { return console.log(err) }

            db.query("DROP TABLE guests; DROP TABLE invitations; DROP TABLE migrations;", function (err, results) {
                if (err) {console.log(err)}
                console.log(results)
                done();
                process.exit(1);
            });
    });
}
