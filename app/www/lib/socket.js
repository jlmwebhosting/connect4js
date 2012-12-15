/*global require:false, define:false */
"use strict";
define(['socket.io'],
	function (io) {
		var callbacks = {
			player_move: null,
			waiting: null
		};

		var socket = io.connect('/');
		socket.on("waiting", function (data) {
			var msg = (data && data.message) || "waiting ...";
			if (callbacks.waiting) {
				callbacks.waiting(msg);
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
