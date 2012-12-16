/*global require:false, define:false */
'use strict';
require.config({
    paths: {
        "game_controller": "/js/controllers/game_controller",
    	'domReady': 'require/domReady',
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

require(["socket", "jquery", "angular", 'game_controller', 'domReady'],
	function(socket, $, angular, GameController, domReady){
        var app = angular.module('connect4', []);
        app.controller('GameController', GameController);
        app.run();
        angular.bootstrap(document, ['connect4'])
	}
);