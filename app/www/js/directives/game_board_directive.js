define(
    [
        'angular',
        'jquery',
        'underscore'
    ],
    function(angular, $, _){
        var GameBoardDirective = function(){
        	console.log("gbd");

        	var linker = function(scope, element, attrs) {
        		console.log(scope);

	        	var draw = function(){
	        		console.log("drawing");
	        	}
	        }

        	return {
                link: linker,
                restrict: 'E'
            };
        }

        return GameBoardDirective;
    }
);