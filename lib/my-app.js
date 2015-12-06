var express = require('express');
var app = express();
var server;
var nameDB = require('./name-db');
var _s = require('underscore.string');

var start = function (port, callback) {
    server = app.listen(port, callback);
};

var stop = function (callback) {
    server.close(callback);
};

app.get('/hello', function (req, res) {
    res.status(200).send('Hello World');
});

app.get('/greetings', function (req, res) {
    var names = nameDB.getRandomNames(3);
    var greeting = _s.toSentenceSerial(names);
    res.status(200).send('Greetings from ' + greeting + '!');
});

exports.start = start;
exports.stop = stop;