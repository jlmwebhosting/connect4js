/* Controller Module Define */

require(
    [
        'angular',
        '/js/controllers/game_controller.js'
    ],
    function(angular, GameController){
        var controllers = angular.module('connect4-controllers', []);

        controllers.controller('GameController', GameController);

        console.log(GameController);

        return controllers;
    }
);