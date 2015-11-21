var now = 1;
var maxf = 1;
var ifmove = 1;
var buykuang = 0;
var monsterChange = 0;
var tenif = 1;
var tenifover = 0;
var threeif = 1;
var twentyif = 1;

var wallImage = document.getElementById('wall');
var loadImage = document.getElementById('load');
var keydoorImage = document.getElementById('keydoor');
var medicine = document.getElementById('medicine');
var stone = document.getElementById('stone');
var zhizhe = document.getElementById('zhizhe');
var fly = document.getElementById('fly');
var store = document.getElementById('store');
var thief = document.getElementById('thief');
var ghost = document.getElementById('ghost');
var zhangyu = document.getElementById('zhangyu');
var stoneperson = document.getElementById('stoneperson');
var something = document.getElementById('something');
var shangren = document.getElementById('shangren');
var monster1 = document.getElementById('monster1');
var monster2 = document.getElementById('monster2');
var monster3 = document.getElementById('monster3');
var monster4 = document.getElementById('monster4');
var monster5 = document.getElementById('monster5');
var monster6 = document.getElementById('monster6');
var dafashi = document.getElementById('dafashi');

var actorLive = document.getElementById('live');
var actorAttack = document.getElementById('attack');
var actorDefense = document.getElementById('defense');
var actorMoney = document.getElementById('money');
var actorYkey = document.getElementById('ykey');
var actorBkey = document.getElementById('bkey');
var actorRkey = document.getElementById('rkey');

var monsterLive = document.getElementById('monsterlive');
var monsterAttack = document.getElementById('monsterattack');
var monsterDefense = document.getElementById('monsterdefense');
var monsterMoney = document.getElementById('monstermoney');
var monsterExpirical = document.getElementById('monsterexpirical');
var talk = document.getElementById('talk');

var key = 0;

var clearX = 0;
var clearY = 0;
var clearWidth = 0;
var clearHeight = 0;

var move = 0;

function loadMap(cxt){
	for(var i=0; i<11; i++){
		for(var j=0; j<11; j++){
			// if(Mapwall[now-1][i][j] == 1){
			// 	drawMap(cxt,32,0,32,32,50*j,50*i,50,50,wallImage);
			// }
			// else{
			// 	drawLoad(cxt,0,0,33,33,50*j,50*i,50,50,loadImage);
			// }
			switch(Mapwall[now-1][i][j]){
				case 1:
					drawWall(cxt,32,0,32,32,50*j,50*i,50,50,wallImage);
					break;
				case 0:
					drawLoad(cxt,0,0,33,33,50*j,50*i,50,50,loadImage);
					break;
			}
		}
	}
	for(var i=0; i<11; i++){
		for(var j=0; j<11; j++){
			switch(things[now-1][i][j]){
				case 1:
					cxt.drawImage(keydoorImage,96,64,32,32,50*j,50*i,50,50);
					break;
				case 2:
					cxt.drawImage(keydoorImage,96,32,32,32,50*j,50*i,50,50);
					break;
				case 3:
					cxt.drawImage(keydoorImage,96,0,32,32,50*j,50*i,50,50);
					break;
				case 4:
					cxt.drawImage(keydoorImage,64,0,32,32,50*j,50*i,50,50);
					break;
				case 5:
					cxt.drawImage(keydoorImage,32,0,32,32,50*j,50*i,50,50);
					break;
				case 6:
					cxt.drawImage(keydoorImage,0,0,32,32,50*j,50*i,50,50);
					break;
				case 7:
					cxt.drawImage(loadImage,594,660,33,33,50*j,50*i,50,50);
					break;
				case 8:
					cxt.drawImage(loadImage,594,627,33,33,50*j,50*i,50,50);
					break;
				case 9:
					cxt.drawImage(medicine,0,0,32,32,50*j,50*i,50,50);
					break;
				case 10:
					cxt.drawImage(medicine,32,0,32,32,50*j,50*i,50,50);
					break;
				case 11:
					cxt.drawImage(stone,0,0,32,32,50*j,50*i,50,50);
					break;
				case 12:
					cxt.drawImage(stone,32,0,32,32,50*j,50*i,50,50);
					break;
				case 13:
					cxt.drawImage(fly,0,0,32,32,50*j,50*i,50,50);
					break;
				case 14:
					cxt.drawImage(zhizhe,0,0,32,32,50*j,50*i,50,50);
					break;
				case 15:
					cxt.drawImage(shangren,0,0,32,32,50*j,50*i,50,50);
					break;
				case 17:
					cxt.drawImage(wallImage,96,0,32,32,50*j,50*i,50,50);
					break;
				case 18:
					cxt.drawImage(thief,0,0,32,32,50*j,50*i,50,50);
					break;
				case 19:
					cxt.drawImage(store,0,0,96,32,50*(j-1),50*i,150,50);
					break;
				case 20:
					cxt.drawImage(monster1,0,0,32,32,50*j,50*i,50,50);
					break;
				case 21:
					cxt.drawImage(monster1,0,32,32,32,50*j,50*i,50,50);
					break;
				case 22:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 23:
					cxt.drawImage(monster2,0,0,32,32,50*j,50*i,50,50);
					break;
				case 24:
					cxt.drawImage(monster2,0,32,32,32,50*j,50*i,50,50);
					break;
				case 25:
					cxt.drawImage(monster2,0,64,32,32,50*j,50*i,50,50);
					break;
				case 26:
					cxt.drawImage(monster3,0,0,32,32,50*j,50*i,50,50);
					break;
				case 27:
					cxt.drawImage(monster3,0,32,32,32,50*j,50*i,50,50);
					break;
				case 28:
					cxt.drawImage(monster3,0,64,32,32,50*j,50*i,50,50);
					break;
				case 29:
					cxt.drawImage(monster4,0,0,32,32,50*j,50*i,50,50);
					break;
				case 30:
					cxt.drawImage(monster4,0,32,32,32,50*j,50*i,50,50);
					break;
				case 31:
					cxt.drawImage(monster6,0,0,32,32,50*j,50*i,50,50);
					break;
				case 32:
					cxt.drawImage(monster6,0,32,32,32,50*j,50*i,50,50);
					break;
				case 33:
					cxt.drawImage(monster5,0,32,32,32,50*j,50*i,50,50);
					break;
				case 34:
					cxt.drawImage(monster5,0,32,32,32,50*j,50*i,50,50);
					break;
				case 35:
					cxt.drawImage(monster5,0,64,32,32,50*j,50*i,50,50);
					break;
				case 36:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 37:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 38:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 39:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 40:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 41:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 42:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 43:
					cxt.drawImage(stoneperson,0,3,32,32,50*j,50*i,50,50);
					break;
				case 44:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 45:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 46:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 47:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 48:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 49:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 50:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 51:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 52:
					cxt.drawImage(monster1,0,64,32,32,50*j,50*i,50,50);
					break;
				case 53:
					cxt.drawImage(ghost,0,0,32,32,50*j,50*i,50,50);
					break;
				case 54:
					cxt.drawImage(ghost,0,0,32,32,50*j,50*i,50,50);
					break;
				case 55:
					cxt.drawImage(monster5,0,0,32,32,50*j,50*i,50,50);
					break;
				case 56:
					cxt.drawImage(dafashi,0,0,32,32,50*j,50*i,50,50);
					break;
				case 58:
					cxt.drawImage(zhangyu,0,0,32,32,50*(j-1),50*(i-1),150,150);
					break;
				case 70:
					cxt.drawImage(something,0,0,32,32,50*j,50*i,50,50);
					break;
				case 72:
					cxt.drawImage(something,0,64,32,32,50*j,50*i,50,50);
					break;
				case 73:
					cxt.drawImage(something,32,64,32,32,50*j,50*i,50,50);
					break;
				case 74:
					cxt.drawImage(something,32,0,32,32,50*j,50*i,50,50);
					break;
				case 99:
					cxt.drawImage(wallImage,32,0,32,32,50*j,50*i,50,50);
					break;
			}
		}
	}
}
function drawWall(cxt,sx,sy,swidth,sheight,x,y,width,height,wallImage){
	cxt.drawImage(wallImage,sx,sy,swidth,sheight,x,y,width,height);
}
function drawLoad(cxt,sx,sy,swidth,sheight,x,y,width,height,loadImage){
	cxt.drawImage(loadImage,sx,sy,swidth,sheight,x,y,width,height);
}
function drawActor(cxt,sx,sy,swidth,sheight,x,y,width,height,actorImage){
	cxt.drawImage(actorImage,sx,sy,swidth,sheight,x,y,width,height);
}
function actorMove(context,actorImage){
	document.onkeydown = function(){
		if(ifmove == 1 && buykuang == 0){
		key = window.event.keyCode;
		// if(key == 37){
		// 	actorX -= 50;
		// 	drawActor(context,0,32,32,32,actorX,actorY,50,50,actorImage);
		// }
		// else if(key == )[now-1]
		switch(key){
			case 37:
				if(Mapwall[now-1][actorY[now-1]][actorX[now-1]-1] == 0){
					// alert(things[now-1][actorY][actorX-1]);
					move = 1;
					actorInforChange(things[now-1][actorY[now-1]][actorX[now-1]-1],actorY[now-1],actorX[now-1]-1,context,actorImage);
					if(move == 1){
						actorX[now-1] -= 1;
						clearCanvas(context,actorX[now-1]*50,actorY[now-1]*50,100,50);
						drawLoad(context,0,0,33,33,actorX[now-1]*50,actorY[now-1]*50,50,50,loadImage);
						drawLoad(context,0,0,33,33,(actorX[now-1]+1)*50,actorY[now-1]*50,50,50,loadImage);
						drawActor(context,0,32,32,32,actorX[now-1]*50,actorY[now-1]*50,50,50,actorImage);
					}
					else{
						return;
					}
				}
				else{
					return;
				}
				break;
			case 38:
				if(Mapwall[now-1][parseInt(actorY[now-1])-1][actorX[now-1]] == 0){
					move = 1;
					actorInforChange(things[now-1][actorY[now-1]-1][actorX[now-1]],actorY[now-1]-1,actorX[now-1],context,actorImage);
					if(move == 1){
						actorY[now-1] -= 1;
						clearCanvas(context,actorX[now-1]*50,actorY[now-1]*50,50,100);
						drawLoad(context,0,0,33,33,actorX[now-1]*50,actorY[now-1]*50,50,50,loadImage);
						drawLoad(context,0,0,33,33,actorX[now-1]*50,(actorY[now-1]+1)*50,50,50,loadImage);
						drawActor(context,0,98,32,32,actorX[now-1]*50,actorY[now-1]*50,50,50,actorImage);
					}
					else{
						return;
					}
				}
				else{
					return;
				}
				break;
			case 39:
				if(Mapwall[now-1][actorY[now-1]][actorX[now-1]+1] == 0){
					move = 1;
					actorInforChange(things[now-1][actorY[now-1]][actorX[now-1]+1],actorY[now-1],actorX[now-1]+1,context,actorImage);
					if(move == 1){
						actorX[now-1] += 1;
						clearCanvas(context,(actorX[now-1]-1)*50,actorY[now-1]*50,100,50);
						drawLoad(context,0,0,33,33,actorX[now-1]*50,actorY[now-1]*50,50,50,loadImage);
						drawLoad(context,0,0,33,33,(actorX[now-1]-1)*50,actorY[now-1]*50,50,50,loadImage);
						drawActor(context,0,65,32,32,actorX[now-1]*50,actorY[now-1]*50,50,50,actorImage);
					}
					else{
						return;
					}
				}
				else{
					return;
				}
				break;
			case 40:
				if(Mapwall[now-1][actorY[now-1]+1][actorX[now-1]] == 0){
					move = 1;
					actorInforChange(things[now-1][actorY[now-1]+1][actorX[now-1]],1+actorY[now-1],actorX[now-1],context,actorImage);
					if(move == 1){
						actorY[now-1] += 1;
						clearCanvas(context,actorX[now-1]*50,(actorY[now-1]-1)*50,50,100);
						drawLoad(context,0,0,33,33,actorX[now-1]*50,actorY[now-1]*50,50,50,loadImage);
						drawLoad(context,0,0,33,33,actorX[now-1]*50,(actorY[now-1]-1)*50,50,50,loadImage);
						drawActor(context,0,0,32,32,actorX[now-1]*50,actorY[now-1]*50,50,50,actorImage);
					}
					else{
						return;
					}
				}
				else{
					return;
				}
				break;
			case 72:
				if(person.shouce == 1){
					alert('123');
				}
				break;
			case 74:
				if(person.fly == 1){// && now > 1
					move = 1;
					now -= 1;
					document.getElementById('lll').innerHTML = now;
					clearCanvas(context,0,0,550,550);
					loadMap(context);
					drawActor(context,0,0,32,32,upX[now-1]*50,upY[now-1]*50,50,50,actorImage);
					move = 0;
					for(var i=0; i<actorX.length; i++){
						actorX[i] = upX[i];
						actorY[i] = upY[i];
					}
				}
				break;
			case 85:
				if(person.fly == 1){// && now < maxf
					move = 1;
					now += 1;
					document.getElementById('lll').innerHTML = now;
					clearCanvas(context,0,0,550,550);
					loadMap(context);
					drawActor(context,0,0,32,32,upX[now-1]*50,upY[now-1]*50,50,50,actorImage);
					move = 0;
					for(var i=0; i<actorX.length; i++){
						actorX[i] = upX[i];
						actorY[i] = upY[i];
					}
				}
				break;
		}
		}
		else{
			return;
		}
		if(now == 3 && actorY[now-1] == 8 && actorX[now-1] == 4 && threeif == 1){
			alert('你被抓走了');
			now = 2;
			actorX[now-1] = 3;
			actorY[now-1] = 7;
			context.clearRect(0,0,550,550);
			loadMap(context);
			drawActor(context,0,0,32,32,actorX[now-1]*50,actorY[now-1]*50,50,50,actorImage);
		}
		if(now == 10 && actorY[now-1] == 4 && actorX[now-1] == 5 && tenif == 1){
			person.fly = 0;
			for(var i=0; i<9; i++){
				things[now-1][deletetenY[i]][deletetenX[i]] = 0;
				drawLoad(context,0,0,33,33,deletetenX[i]*50,deletetenY[i]*50,50,50,loadImage);
			}
			for(var i=9; i<11; i++){
				Mapwall[now-1][deletetenY[i]][deletetenX[i]] = 0;
				drawLoad(context,0,0,33,33,deletetenX[i]*50,deletetenY[i]*50,50,50,loadImage);
			}
			for(var i=0; i<6; i++){
				things[now-1][showtenX[i]][showtenY[i]] = 23;
				context.drawImage(monster2,0,0,32,32,50*showtenY[i],50*showtenX[i],50,50);
			}
			for(var i=6; i<8; i++){
				things[now-1][showtenX[i]][showtenY[i]] = 24;
				context.drawImage(monster2,0,32,32,32,50*showtenY[i],50*showtenX[i],50,50);
			}
			for(var i=8; i<12; i++){
				things[now-1][showtenX[i]][showtenY[i]] = 17;
				context.drawImage(wallImage,96,0,32,32,50*showtenY[i],50*showtenX[i],50,50);
			}
			things[now-1][showtenX[12]][showtenY[12]] = 25;
			context.drawImage(monster2,0,64,32,32,50*showtenY[12],50*showtenX[12],50,50);
			tenif = 0;
		}
		if(now == 20 && actorY[now-1] == 7 && actorX[now-1] == 5 && twentyif == 1){
			things[now-1][8][5] = 17;
			context.drawImage(wallImage,96,0,32,32,50*5,50*8,50,50);
			for(var i=4; i<7; i++){
				for(var j=4; j<7; j++){
					things[now-1][i][j] = 0;
					drawLoad(context,0,0,33,33,50*j,50*i,50,50,loadImage);
				}
			}
			things[now-1][5][5] = 53;
			context.drawImage();
		}
	}
}
function clearCanvas(cxt,x,y,width,height){
	cxt.clearRect(x,y,width,height);
}
function actorInfor(){
	actorLive.innerHTML = person.live;
	actorAttack.innerHTML = person.attack;
	actorDefense.innerHTML = person.defense;
	actorMoney.innerHTML = person.money;
	actorYkey.innerHTML = person.ykey;
	actorBkey.innerHTML = person.bkey;
	actorRkey.innerHTML = person.rkey;
}
function monsterInfor(infor){
	monsterLive.innerHTML = infor.live;
	monsterAttack.innerHTML = infor.attack;
	monsterDefense.innerHTML = infor.defense;
	monsterMoney.innerHTML = infor.money;
	monsterExpirical.innerHTML = infor.expirical;
}
function actorInforChange(thingsNum,yy,xx,context,actorImage){
	switch(thingsNum){
		case 0:
			move = 1;
			break;
		case 1:
			move = 1;
			person.ykey += 1;
			things[now-1][yy][xx] = 0;
			actorInfor();
			break;
		case 2:
			move = 1;
			person.bkey += 1;
			things[now-1][yy][xx] = 0;
			actorInfor();
			break;
		case 3:
			move = 1;
			person.rkey += 1;
			things[now-1][yy][xx] = 0;
			actorInfor();
			break;
		case 4:
			if(person.ykey > 0){
				move = 1;
				person.ykey -= 1;
				things[now-1][yy][xx] = 0;
				actorInfor();
			}
			else{
				move = 0;
				return;
			}
			break;
		case 5:
			if(person.bkey > 0){
				move = 1;
				person.bkey -= 1;
				things[now-1][yy][xx] = 0;
				actorInfor();
			}
			else{
				move = 0;
				return;
			}
			break;
		case 6:
			if(person.rkey > 0){
				move = 1;
				person.rkey -= 1;
				things[now-1][yy][xx] = 0;
				actorInfor();
			}
			else{
				move = 0;
				return;
			}
			break;
		case 7:
			move = 1;
			now += 1;
			maxf = Math.max(now,maxf);
			document.getElementById('lll').innerHTML = now;
			clearCanvas(context,0,0,550,550);
			loadMap(context);
			drawActor(context,0,0,32,32,upX[now-1]*50,upY[now-1]*50,50,50,actorImage);
			move = 0;
			for(var i=0; i<actorX.length; i++){
				actorX[i] = upX[i];
				actorY[i] = upY[i];
			}
			break;
		case 8:
			move = 1;
			now -= 1;
			document.getElementById('lll').innerHTML = now;
			clearCanvas(context,0,0,550,550);
			loadMap(context);
			drawActor(context,0,0,32,32,downX[now-1]*50,downY[now-1]*50,50,50,actorImage);
			move = 0;
			for(var i=0; i<actorX.length; i++){
				actorX[i] = downX[i];
				actorY[i] = downY[i];
			}
			break;
		case 9:
			move = 1;
			person.live += 50;
			things[now-1][yy][xx] = 0;
			actorInfor();
			break;
		case 10:
			move = 1;
			person.live += 200;
			things[now-1][yy][xx] = 0;
			actorInfor();
			break;
		case 11:
			move = 1;
			person.attack += 1;
			things[now-1][yy][xx] = 0;
			actorInfor();
			break;
		case 12:
			move = 1;
			person.defense += 1;
			things[now-1][yy][xx] = 0;
			actorInfor();
			break;
		case 13:
			move = 1;
			person.fly = 1;
			things[now-1][yy][xx] = 0;
			actorInfor();
		case 14:
			move = 0;
			things[now-1][yy][xx] = 0;
			deleteZhizhe(now,yy,xx,context);
			actorInfor();
			break;
		case 15:
			move = 0;
			deleteshangren(now,yy,xx,context);
			actorInfor();
			break;
		case 17:
			move = 0;
			break;
		case 18:
			move = 0;
			thiefthing(now,yy,xx,context);
			break;
		case 19:
			move = 0;
			buy(now,context,actorImage);
			actorInfor();
		case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:
			monsterChange = monsters[thingsNum-20][0].live;
			console.log(monsters[thingsNum-20][0]);
			console.log(monsterChange);
			monsterInfor(monsters[thingsNum-20][0]);
			// && Math.ceil(monsters[thingsNum-20][0].live/(person.attack-monsters[thingsNum-20][0].defense)) <= Math.ceil(person.live/(monsters[thingsNum-20][0].attack-person.defense))
			if(person.attack > monsters[thingsNum-20][0].defense){
				if(monsters[thingsNum-20][0].attack < person.defense){
					move = 1;
					ifmove = 0;
					console.log(ifmove);
					var timer = setInterval(function(){
						monsters[thingsNum-20][0].live -= (person.attack - monsters[thingsNum-20][0].defense);
						monsterInfor(monsters[thingsNum-20][0]);
						if(monsters[thingsNum-20][0].live <= 0){
							monsters[thingsNum-20][0].live = 0;
							monsterInfor(monsters[thingsNum-20][0]);
							person.money += monsters[thingsNum-20][0].money;
							ifmove = 1;
							monsters[thingsNum-20][0].live = monsterChange;
							opendoor(thingsNum,yy,xx,context);
							clearInterval(timer);
						}
						person.live -= 0;
						actorInfor();
					},300);
					things[now-1][yy][xx] = 0;
					actorInfor();
				}
				else if(monsters[thingsNum-20][0].attack > person.defense && Math.ceil(monsters[thingsNum-20][0].live/(person.attack - monsters[thingsNum-20][0].defense)) <= Math.ceil(person.live/(monsters[thingsNum-20][0].attack - person.defense))){
					move = 1;
					ifmove = 0;
					console.log(ifmove);
					var timer = setInterval(function(){
						monsters[thingsNum-20][0].live -= (person.attack-monsters[thingsNum-20][0].defense);
						monsterInfor(monsters[thingsNum-20][0]);
						if(monsters[thingsNum-20][0].live <= 0){
							monsters[thingsNum-20][0].live = 0;
							monsterInfor(monsters[thingsNum-20][0]);
							person.money += monsters[thingsNum-20][0].money;
							ifmove = 1;
							monsters[thingsNum-20][0].live = monsterChange;
							opendoor(thingsNum,yy,xx,context);
							clearInterval(timer);
						}
						person.live -= (monsters[thingsNum-20][0].attack - person.defense);
						actorInfor();
					},300);
					things[now-1][yy][xx] = 0;
					actorInfor();
				}
				else{
					move = 0;
				}
			}
			else{
				move = 0;
			}
			break;
		case 70:
			move = 1;
			person.attack += 10;
			things[now-1][yy][xx] = 0;
			actorInfor();
			break;
		case 72:
			move = 1;
			person.defense += 10;
			things[now-1][yy][xx] = 0;
			actorInfor();
			break;
		case 73:
			move = 1;
			person.defense += 20;
			things[now-1][yy][xx] = 0;
			actorInfor();
			break;
		case 74:
			move = 1;
			person.attack += 20;
			things[now-1][yy][xx] = 0;
			actorInfor();
			break;
		case 97:
			move = 0;
			break;
		case 98:
			move = 0;
			Mapwall[now-1][yy][xx] = 0;
			context.drawImage(wallImage,32,0,32,32,50*xx,50*yy,50,50);
			break;
		case 99:
			move = 0;
			things[now-1][yy][xx] = 0;
			context.drawImage(loadImage,0,0,32,32,50*xx,50*yy,50,50);
			break;
	}
}
function opendoor(thingsNum,yy,xx,context){
	switch(now){
		case 2:
			if(things[now-1][1][5] == 0 && things[now-1][1][7] == 0){
				for(var i=0; i<6; i++){
					things[now-1][opendoorX[i]][opendoorY[i]] = 0;
					drawLoad(context,0,0,33,33,50*opendoorY[i],50*opendoorX[i],50,50,loadImage);
				}
			}
			break;
		case 8:
			if(things[now-1][4][8] == 0 && things[now-1][4][10] == 0){
				things[now-1][3][9] = 0;
				drawLoad(context,0,0,33,33,50*9,50*3,50,50,loadImage)
			}
			break;
		case 10:
			if(things[now-1][2][0] == 0){
				for(var i=0; i<8; i++){
					tenifover += things[now-1][showtenX[i]][showtenY[i]];
				}
				if(tenifover == 0){
					things[now-1][2][5] = 0;
					drawLoad(context,0,0,33,33,50*5,50*2,50,50,loadImage);
				}
				else{
					tenifover = 0;
				}
			}
			if(things[now-1][1][5] == 0 && things[now-1][3][5] == 0){
				for(var i=8; i<11; i++){
					things[now-1][showtenX[i]][showtenY[i]] = 0;
					context.drawImage(loadImage,0,0,33,33,50*showtenY[i],50*showtenX[i],50,50);
				}
				things[now-1][10][5] = 7;
				things[now-1][9][5] = 18;
				person.fly = 1;
				context.drawImage(thief,0,0,32,32,50*5,50*9,50,50);
				context.drawImage(loadImage,594,660,33,33,50*5,50*10,50,50);
			}
			break;
		case 11:
			if(things[now-1][4][0] == 0 && things[now-1][4][2] == 0){
				things[now-1][3][1] = 0;
				context.drawImage(loadImage,0,0,33,33,50*1,50*3,50,50);
			}
			break;
		case 14:
			if(things[now-1][0][0] == 0 && things[now-1][0][2] == 0 && things[now-1][1][1] == 0 && Mapwall[now-1][2][0] == 1){
				Mapwall[now-1][2][0] = 0;
				things[now-1][2][0] = 3;
				context.drawImage(loadImage,0,0,33,33,50*0,50*2,50,50);
				context.drawImage(keydoorImage,96,0,32,32,50*0,50*2,50,50);u
			}
			break;
		case 17:
			if(things[now-1][7][0] == 0 && things[now-1][7][2] == 0){
				things[now-1][6][1] = 0;
				context.drawImage(loadImage,0,0,33,33,50*1,50*6,50,50);
			}
			if(things[now-1][4][0] == 0 && things[now-1][4][2] == 0){
				things[now-1][3][1] = 0;
				context.drawImage(loadImage,0,0,33,33,50*1,50*3,50,50);
			}
			if(things[now-1][7][8] == 0 && things[now-1][7][10] == 0){
				things[now-1][6][9] = 0;
				context.drawImage(loadImage,0,0,33,33,50*9,50*6,50,50);
			}
			if(things[now-1][4][8] == 0 && things[now-1][4][10] == 0){
				things[now-1][3][9] = 0;
				context.drawImage(loadImage,0,0,33,33,50*9,50*3,50,50);
			}
	}
}
function deleteZhizhe(ceng,yy,xx,context){
	switch(ceng){
		case 3:
			alert('我可以给你怪物手册，你可以用快捷键<H>去使用它。它能预测出当前楼层各类怪物对你的伤害。');
			person.shouce = 1;
			drawLoad(context,0,0,33,33,50*xx,50*yy,50,50,loadImage);
			break;
		case 4:
			alert('有些门不能用钥匙打开，只有当你打败它的守卫后才会自动打开。');
			drawLoad(context,0,0,33,33,50*xx,50*yy,50,50,loadImage);
			break;
		case 6:
			alert('你购买了礼物后再和商人对话，他会告诉你一些重要的消息。');
			drawLoad(context,0,0,33,33,50*xx,50*yy,50,50,loadImage);
			break;
		case 16:
			alert('我听说在塔内有2把隐藏的红钥匙。');
			drawLoad(context,0,0,33,33,50*xx,50*yy,50,50,loadImage);
			break;
		case 18:
			alert('在这区域不多次提升攻击力，就不能打败石头人。切记前人教训！');
			drawLoad(context,0,0,33,33,50*xx,50*yy,50,50,loadImage);
			break;
	}
}
function deleteshangren(ceng,yy,xx,context){
	switch(ceng){
		case 6:
			if(confirm('我有一把蓝钥匙你出50金币就卖给你。')){
				if(person.money >= 50){
					person.money -= 50;
					person.bkey += 1;
					things[ceng-1][yy][xx] = 0;
					drawLoad(context,0,0,33,33,50*xx,50*yy,50,50,loadImage);
				}
				else{
					alert('去找佛爷借钱吧');
				}
			}
			else{
				return;
			}
			break;
		case 7:
			if(confirm('我有五把黄钥匙你出50金币我就卖给你。')){
				if(person.money >= 50){
					person.money -= 50;
					person.ykey += 5;
					things[ceng-1][yy][xx] = 0;
					drawLoad(context,0,0,33,33,50*xx,50*yy,50,50,loadImage);
				}
				else{
					alert('去找佛爷借钱吧');
				}
			}
			else{
				return;
			}
			break;
		case 12:
			if(xx == 0){
				if(confirm('我有一把红钥匙你出800个金币就卖给你。')){
					if(person.money >= 800){
						person.money -= 800;
						person.rkey += 1;
						things[ceng-1][yy][xx] = 0;
						drawLoad(context,0,0,33,33,50*xx,50*yy,50,50,loadImage);
					}
					else{
						alert('去找佛爷借钱吧');
					}
				}
			}
			else{
				if(confirm('我有许多把黄钥匙1000个金币一把你要吗？')){
					if(person.money >= 1000){
						person.money -= 1000;
						person.ykey += 1;
					}
					else{
						alert('去找佛爷借钱吧');
					}
				}
			}
			break;
		case 15:
			if(confirm('我有一把蓝钥匙你出200金币就卖给你。')){
				if(person.money >= 200){
					person.money -= 200;
					person.bkey += 1;
					things[ceng-1][yy][xx] = 0;
					drawLoad(context,0,0,33,33,50*xx,50*yy,50,50,loadImage);
				}
				else{
					alert('去找佛爷借钱吧');
				}
			}
			break;
	}
}
function thiefthing(now,yy,xx,context){
	switch(now){
		case 2:
			alert('hahaha');
			things[now-1][yy][xx] = 0;
			drawLoad(context,0,0,33,33,50*xx,50*yy,50,50,loadImage);
			Mapwall[now-1][6][1] = 0;
			drawLoad(context,0,0,33,33,50*1,50*6,50,50,loadImage);
			threeif = 0;
			break;
		case 10:
			alert('hahaha');
			things[now-1][yy][xx] = 0;
			drawLoad(context,0,0,33,33,50*xx,50*yy,50,50,loadImage);
			break;
		case 15:
			alert('hahaha');
			things[now-1][yy][xx] = 0;
			drawLoad(context,0,0,33,33,50*xx,50*yy,50,50,loadImage);
			Mapwall[now-1][0][7] = 0;
			drawLoad(context,0,0,33,33,50*7,50*0,50,50,loadImage);
			break;
	}
}
var fourbuytime = 0;
var fourbuymoney = 20;
var twelvebuytime = 0;
var twelvebuymoney = 20;
var ooo = [200,2,4];
var ppp = [400,4,8];
function buy(ceng,context,actorImage){
	var buybuybuy = document.getElementById('buybuybuy');
	var buymoney = document.getElementById('buymoney');
	var buything = buybuybuy.getElementsByTagName('i');
	buybuybuy.style.display = 'block';
	buykuang = 1;
	switch(ceng){
		case 4:
			buymoney.innerHTML = fourbuymoney;
			for(var i=1; i<buything.length; i++){
				buything[i].innerHTML = ooo[i-1];
			}
			document.onkeydown = function(){
				key = window.event.keyCode;
				switch(key){
					case 81:
						buybuybuy.style.display = 'none';
						buykuang = 0;
						actorMove(context,actorImage);
						break;
					case 97: case 49:
						if(person.money >= fourbuymoney){
							person.money -= fourbuymoney;
							person.live += 200;
							actorInfor();
							fourbuytime += 1;
							fourbuymoney += fourbuytime * 20;
							buybuybuy.style.display = 'none';
							buykuang = 0;
							actorMove(context,actorImage);
						}
						else{
							buybuybuy.style.display = 'none';
							alert('去找佛爷借钱吧');
							buykuang = 0;
							actorMove(context,actorImage);
						}
						break;
					case 98: case 50:
						if(person.money >= fourbuymoney){
							person.money -= fourbuymoney;
							person.attack += 2;
							actorInfor();
							fourbuytime += 1;
							fourbuymoney += fourbuytime * 20;
							buybuybuy.style.display = 'none';
							buykuang = 0;
							actorMove(context,actorImage);
						}
						else{
							buybuybuy.style.display = 'none';
							alert('去找佛爷借钱吧');
							buykuang = 0;
							actorMove(context,actorImage);
						}
						break;
					case 99: case 51:
						if(person.money >= fourbuymoney){
							person.money -= fourbuymoney;
							person.defense += 4;
							actorInfor();
							fourbuytime += 1;
							fourbuymoney += fourbuytime * 20;
							buybuybuy.style.display = 'none';
							buykuang = 0;
							actorMove(context,actorImage);
						}
						else{
							buybuybuy.style.display = 'none';
							alert('去找佛爷借钱吧');
							buykuang = 0;
							actorMove(context,actorImage);
						}
						break;
				}
			}
			break;
		case 12:
			buymoney.innerHTML = twelvebuymoney;
			for(var i=1; i<buything.length; i++){
				buything[i].innerHTML = ppp[i-1];
			}
			document.onkeydown = function(){
				key = window.event.keyCode;
				switch(key){
					case 81:
						buybuybuy.style.display = 'none';
						buykuang = 0;
						actorMove(context,actorImage);
						break;
					case 97: case 49:
						if(person.money >= twelvebuymoney){
							person.money -= twelvebuymoney;
							person.live += 400;
							actorInfor();
							twelvebuytime += 1;
							twelvebuymoney += twelvebuytime * 20;
							buybuybuy.style.display = 'none';
							buykuang = 0;
							actorMove(context,actorImage);
						}
						else{
							buybuybuy.style.display = 'none';
							alert('去找佛爷借钱吧');
							buykuang = 0;
							actorMove(context,actorImage);
						}
						break;
					case 98: case 50:
						if(person.money >= twelvebuymoney){
							person.money -= twelvebuymoney;
							person.attack += 4;
							actorInfor();
							twelvebuytime += 1;
							twelvebuymoney += twelvebuytime * 20;
							buybuybuy.style.display = 'none';
							buykuang = 0;
							actorMove(context,actorImage);
						}
						else{
							buybuybuy.style.display = 'none';
							alert('去找佛爷借钱吧');
							buykuang = 0;
							actorMove(context,actorImage);
						}
						break;
					case 99: case 51:
						if(person.money >= twelvebuymoney){
							person.money -= twelvebuymoney;
							person.defense += 8;
							actorInfor();
							twelvebuytime += 1;
							twelvebuymoney += twelvebuytime * 20;
							buybuybuy.style.display = 'none';
							buykuang = 0;
							actorMove(context,actorImage);
						}
						else{
							buybuybuy.style.display = 'none';
							alert('去找佛爷借钱吧');
							buykuang = 0;
							actorMove(context,actorImage);
						}
						break;
				}
			}
			break;
			// if(confirm('点击确定购买2攻击，点击取消购买4防御')){
			// 	if(person.money >= fourbuymoney){
			// 		person.money -= fourbuymoney;
			// 		person.attack += 2;
			// 		fourbuytime += 1;
			// 		fourbuymoney += fourbuytime*20;
			// 	}
			// 	else{
			// 		alert('你好穷哦');
			// 	}
			// }
			// else{
			// 	if(person.money >= fourbuymoney){
			// 		person.money -= fourbuymoney;
			// 		person.defense += 4;
			// 		fourbuytime += 1;
			// 		fourbuymoney += fourbuytime*20;
			// 	}
			// 	else{
			// 		alert('你好穷哦');
			// 	}
			// }
			break;
	}
}