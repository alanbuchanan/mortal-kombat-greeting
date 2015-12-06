var express = require('express');
var app = express();
var server;
var nameDB = require('./name-db');
var _s = require('underscore.string');

var start = exports.start = function start (port, callback) {
    server = app.listen(port, callback);
};

var stop = exports.stop = function stop (callback) {
    server.close(callback);
};

app.get('/hello', function sendResponse (req, res) {
    res.status(200).send('Hello World');
});

app.get('/greetings', function sendResponse (req, res) {
    var names = nameDB.getRandomNames(3);
    var greeting = _s.toSentenceSerial(names);
    res.status(200).send('Greetings from ' + greeting + '!');
});
