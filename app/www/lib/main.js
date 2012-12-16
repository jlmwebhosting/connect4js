/*global require:false, define:false */
'use strict';
require.config({
    paths: {
    	'domReady': 'require/domReady',
        'text':'require/require-text',
        'jquery': 'jquery/jquery',
        'angular': 'angular/angular.min',
        'angular-resource': 'angular/angular-resource',
        'angular-cookies': 'angular/angular-cookies',
        'underscore': 'underscore/underscore-min',
        'socket.io': '/socket.io/socket.io',
        "game_controller": "/js/controllers/game_controller",
        'game-board-directive': "/js/directives/game_board_directive"
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

require(["socket", "jquery", "angular", 'game_controller', 'game-board-directive', 'domReady'],
	function(socket, $, angular, GameController, GameBoardDirective, domReady){
        var app = angular.module('connect4', []);
        app.controller('GameController', GameController);
        app.directive("gameBoard", GameBoardDirective);
        app.run();
        angular.bootstrap(document, ['connect4'])
	}
);