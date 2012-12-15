'use strict';

require.config = {
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
        }
    }
};

require(["domReady", "jquery", "angular", "socket.io"],
	function(domReady, $, angular){
	   	domReady(function(){
	        console.log(_);
	    });
	}
);