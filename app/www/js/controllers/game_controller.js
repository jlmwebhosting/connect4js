define(['angular', "socket"],
	function(angular, socket){
		var GameController = function($scope){
			$scope.message = "Loading ...";

			$scope.move = function(type){
				socket.move({message:type});
				processMove(type);
			}

			socket.callbacks.waiting = function (msg) {
				$scope.message = msg || "waiting ...";
			};
			socket.callbacks.player_move = function (data) {
				//move handler; inbound
				//$scope.message = "player move: "+JSON.stringify(data);
				processMove(data.message);
			};

			var processMove = function(type){
				switch(type){
					case "normal":
						console.log("Move: invert row");
					break;
					case "explode":
						console.log("Move: explode");
					break;
					case "invertColumn":
						console.log("Move: invert column");
					break;
					case "invertRow":
						console.log("Move: invert row");
					break;
					default:
						console.log("invalid move");
					break;
				}
			}
		}

		return GameController;
	}
);