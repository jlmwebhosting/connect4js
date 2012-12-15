// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		'socket.io': {
			exports: 'io'
		}
	},
	paths: {
		'socket.io': '/socket.io/socket.io'
	}
});


require(["socket.io","jquery","domReady"],
	function(io, $) {

		var message = $("#message");

		var socket = io.connect('/');
		socket.on("waiting", function (data) {
			var msg = (data && data.message) || "waiting ...";
			message.text(msg);
		});
		socket.on("player_move", function (data) {
			message.text("player move: "+JSON.stringify(data));
		});
		var move = function () {
			socket.emit("move", {message:'The message'});
		};
		$("#move").click(function (e) {
			if (e.button === 0) {
				move();
			}
		});

	}
);
