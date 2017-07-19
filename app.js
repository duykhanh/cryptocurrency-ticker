process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var express = require('express');
var app = express();
var http = require('http');
var https = require('https');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bittrex = require('node.bittrex.api');
var autobahn = require('autobahn');
var wsuri = "wss://api.poloniex.com";
var bodyParser = require("body-parser");
const ticker = require('cryptocurrency-ticker');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = 3000;

server.listen(process.env.PORT || port);

var port = 3000;

server.listen(process.env.PORT || port);

io.on('connection', function (client) {
    console.log('Client connected...');
	
    client.on('join', function (data) {
        console.log(data);

    });
    
    	ticker.availableExchanges().then((exchanges) => {
	console.log(exchanges);
	});

	ticker.availablePairs('kraken').then((pairs) => {
		console.log(pairs);
	}).catch((err) => {
		console.error(err);
	});

	ticker.ticker('kraken', 'eth_jpy').then((ticker) => {
		console.log(ticker);
	}).catch((err) => {
		console.error(err);
	});
});





