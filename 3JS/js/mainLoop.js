function iterGame() {

	requestAnimationFrame( iterGame );
	update();
	render();
}
function update() {
	if ( controlsEnabled ) {
		var time = performance.now();
		var delta = ( time - prevTime ) / 1000;
		//player.updatePlayer(delta);
		prevTime = time;
	}
}
function render() {
	renderer.render( scene, camera );
}
iterGame();