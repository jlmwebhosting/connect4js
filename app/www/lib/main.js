"use strict";

require.config({
	shim: {
		'socket.io': {
			exports: 'io'
		}
	},
	paths: {
		'socket.io': '/socket.io/socket.io'
	}
});

require(["socket","jquery","domReady"],
	function(socket, $) {

		var message = $("#message");

		socket.callbacks.waiting = function (msg) {
			message.text(msg || "waiting ...");
		};
		socket.callbacks.player_move = function (data) {
			message.text("player move: "+JSON.stringify(data));
		};
		$("#move").click(function (e) {
			if (e.button === 0) {
				socket.move({message:'The message'});
			}
		});

	}
);
