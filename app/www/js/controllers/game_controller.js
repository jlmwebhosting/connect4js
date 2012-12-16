define(['angular', "socket", "jquery"],
	function(angular, socket, $){
		var GameController = function($scope){
			$(document).keyup(function(ev){
				var key = ev.which-48;
				if(key >= 1 && key <= 7){
					$scope.drop(key);
				}
			})

			var gameBoard = $("#gameBoard");
			var yourTurn = true;

			$scope.message = "Loading ...";

			$scope.drop = function(position){
				if(!yourTurn) return;
				var data = {type: "normal", position: position};
				socket.move(data);
				processMove("you", data);
				yourTurn = false;
				$scope.message = "Waiting on opponent to play";
			}

			socket.callbacks.message = function (msg) {
				$scope.message = msg || "waiting ...";
				$scope.$apply();
			};
			socket.callbacks.player_move = function (data) {
				processMove("them", data);
				yourTurn = true;
				$scope.message = "Your turn";
				$scope.$apply();
			};

			var processMove = function(user, data){
				var type = data.type;
				var position = data.position;
				var td = gameBoard.find("td:nth-child(" + position + ")").not(".used");
				td.last().addClass("used");
				td.last().addClass(user);
			}
		}

		return GameController;
	}
);