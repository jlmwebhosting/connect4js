'use strict';

require.config({
    paths: {
    	'domRead': 'require/domReady',
        'text':'require/require-text',
        'jquery': 'jquery/jquery',
        'angular': 'angular/angular.min',
        'angular-resource': 'angular/angular-resource',
        'angular-cookies': 'angular/angular-cookies',
        'underscore': 'underscore/underscore-min',
        'socket.io': '/socket.io/socket.io'
    },
    shim: {
        'jquery': {
            deps: [],
            exports: '$'
        },
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angular-resource': ['angular'],
        'angular-cookies': ['angular'],
        'underscore': {
            exports: '_'
        },
        'socket.io': {
			exports: 'io'
		}
    }
});

require(["socket.io", "jquery", "angular", "domReady"],
	function(io, $, angular){
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