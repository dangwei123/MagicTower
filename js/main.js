window.onload = function(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var actorImage = document.getElementById('actor');
	actorInfor();
	// context.drawImage(wallImage,32,0,32,32,0,0,50,50);
	loadMap(context);
	drawActor(context,0,0,32,32,actorX[now-1]*50,actorY[now-1]*50,50,50,actorImage);
	actorMove(context,actorImage);
	document.getElementById('lll').innerHTML = now;
}