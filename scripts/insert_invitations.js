#!/usr/bin/env node

var csv  = require('csv'),
    path = require('path'),
    pg     = require('pg'),

    config = require('../config'),

    invs   = require('../lib/invitations'),
    input = process.argv[2];

if (input) {
    input = path.resolve(input);
} else {
    console.error('No input path provided!');
    process.exit(1);
}

console.log('reading csv: ' + input + '!');
readCSVAndWriteToDb(input);

function readCSVAndWriteToDb(input) {
    file_read = csv().from.path(input);
    file_read.to.array(function(rows) {
        console.log(rows);
        writeToDb(rows);
    });
}

function writeToDb(rows) {
    pg.connect(config.database, function (err, db, done) {
            if (err) { return console.log(err) }

//name,address,mailing_address,rsvpd,allow_plusone
//"INSERT INTO zoom (name) VALUES ('node postgres')"
        for (var i = 0; i < rows.length; i++) {
            db.query("INSERT INTO invitations (name,address,mailing_address,rsvpd,allow_plusone) VALUES($1,$2,$3,$4,$5)", rows[i], function (err, results) {
                if (err) {console.log(err)}
                console.log(results)
                done();
            });
        }
    });
}
