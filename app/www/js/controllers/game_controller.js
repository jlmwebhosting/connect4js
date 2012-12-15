var GameController = function($scope){
	$scope.message = "Loading ...";

	$scope.move = function(){
		console.log("moving");
	}

	var message = $("#message");

	// socket.callbacks.waiting = function (msg) {
	// 	message.text(msg || "waiting ...");
	// };
	// socket.callbacks.player_move = function (data) {
	// 	message.text("player move: "+JSON.stringify(data));
	// };
	// $("#move").click(function (e) {
	// 	if (e.button === 0) {
	// 		socket.move({message:'The message'});
	// 	}
	// });
}