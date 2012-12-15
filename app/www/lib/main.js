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

require(["socket", "jquery", "angular", "domReady"],
	function(socket, $, angular){
        var app = angular.module('connect4', []);
        app.controller('GameController', GameController);
        app.run();
        angular.bootstrap(document, ['connect4'])
	}
);