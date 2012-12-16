define(['angular', "socket"],
	function(angular, socket){
		var GameController = function($scope){
			$scope.message = "Loading ...";

			$scope.drop = function(position){
				console.log("dropped", position);
				var data = {type: "normal", position: position};
				socket.move(data);
				processMove("you", data);
			}

			socket.callbacks.waiting = function (msg) {
				$scope.message = msg || "waiting ...";
			};
			socket.callbacks.player_move = function (data) {
				console.log(data);
				//move handler; inbound
				//$scope.message = "player move: "+JSON.stringify(data);
				processMove("them", data);
			};

			var processMove = function(user, data){
				var type = data.type;
				var position = data.position;
				switch(type){
					case "normal":
						console.log(user, "Move: invert row", position);
					break;
					case "explode":
						console.log(user, "Move: explode");
					break;
					case "invertColumn":
						console.log(user, "Move: invert column");
					break;
					case "invertRow":
						console.log(user, "Move: invert row");
					break;
					default:
						console.log(user, "invalid move");
					break;
				}
			}
		}

		return GameController;
	}
);