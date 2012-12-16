/*global require:false, define:false */
"use strict";
define(['socket.io'],
	function (io) {
		var callbacks = {
			player_move: null,
			message: null
		};

		var socket = io.connect('/');
		socket.on("message", function (data) {
			var msg = (data && data.message) || "waiting ...";
			if (callbacks.message) {
				callbacks.message(msg);
			}
		});
		socket.on("player_move", function (data) {
			if (callbacks.player_move) {
				callbacks.player_move(data);
			}
		});
		var move = function (data) {
			socket.emit("move", data);
		};

		return {
			move: move,
			callbacks: callbacks
		};
	}
);
