/*jshint es5:true */
/*global node:true, require:false, process:false, console:false, __dirname:false */

//
// The server
//

var express = require("express"),
	sio = require("socket.io"),
	http = require("http");

var app = express(),
	server = http.createServer(app),
	io = sio.listen(server);

app.use(express.static(__dirname+'/www'));

io.configure(function () {
	/*
	https://github.com/learnboost/socket.io/wiki/Configuring-Socket.IO
	0 - error
	1 - warn
	2 - info
	3 - debug
	*/
	io.set('log level', 1);
});

var port = process.env.PORT || 3000;
server.listen(port, function () {
	console.log("Listening on "+port);
});

var waiting = null;

io.sockets.on('connection', function (socket) {

	if (waiting) {
		waiting.player = socket;
		socket.player = waiting;
		waiting.emit('message',{message: "Connected."});
		socket.emit('message',{message: "Connected."});
		waiting = null;
	} else {
		waiting = socket;
		socket.emit('waiting',{message: "Waiting for another player..."});
	}
	
	socket.on('move', function (data) {
		if (socket.player) {
		socket.player.emit('player_move',data);
		} else {
			// still waiting
			socket.emit('waiting',{message: "Can't move until another player joins your game"});
		}
	});
});
