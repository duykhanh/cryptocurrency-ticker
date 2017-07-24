var express = require('express');
var http = require('http');
var https = require('https');
var server = require('http').createServer(app);
var app = express();
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});
