#!/usr/bin/env node

var async = require('async'),

    email = require('../lib/email'),
    invs  = require('../lib/invitations');

process.stdin.resume();
process.stdin.setEncoding('utf8');

printLinks();

function printLinks() {
    invs.loadInvitations(function (err, invitations) {
        if (err) { throw err; }

        for (var i = 0; i < invitations.length; i++) {
            printLink(invitations[i], null);
        }
    });
}

function printLink(invitation, callback) {
    console.log(invitation.name + "," + "http://wedding.wilson-garnes.com/rsvp/" + invs.encipherId(invitation.id));
}
