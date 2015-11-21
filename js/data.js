var person = {
	live:11100,
	attack:1110,
	defense:1110,
	money:1110,
	ykey:110,
	bkey:110,
	rkey:110,
	shouce:0,
	fly:1
};
var deletetenX = [0,1,2,8,9,10,1,9,5,4,6];
var deletetenY = [2,2,2,2,2,2,3,3,3,5,5];
var showtenX = [3,4,5,3,4,5,3,5,3,3,6,2,1];
var showtenY = [4,4,4,6,6,6,5,5,3,7,5,5,5];
var opendoorX = [4,4,7,7,10,10];
var opendoorY = [4,8,4,8,4,8];
var actorX = [5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var actorY = [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var upX = [5,0,1,10,1,0,10,0,5,0,5,9,1,10,5,5,4,5,0,5,5,5,0,1,1,1,1,9,0,5,5,5,1,1,10,10,1,9];
var upY = [10,1,10,9,10,1,9,1,1,9,9,10,10,9,9,1,10,1,1,9,1,9,1,10,10,10,10,10,9,9,9,10,0,0,1,9,0,0];
var downX = [1,0,9,0,0,10,0,5,0,5,10,1,9,5,5,5,5,1,5,5,5,5,10,1,1,1,9,1,5,5,5,9,5,9,10,1,9,9];
var downY = [0,9,10,9,1,9,1,1,9,9,9,10,10,9,1,9,1,0,9,1,9,6,1,10,10,10,10,10,9,1,1,0,9,0,9,0,0,10];
// var monsters = {
// 	monster1:{
// 		live:50,
// 		attack:20,
// 		defense:1,
// 		money:1,
// 		empirical:1
// 	},
// 	monster2:{
// 		live:70,
// 		attack:15,
// 		defense:2,
// 		money:2,
// 		empirical:2
// 	},
// 	monster3:{
// 		live:200,
// 		attack:35,
// 		defense:10,
// 		money:5,
// 		empirical:5
// 	},
// 	monster4:{
// 		live:110,
// 		attack:25,
// 		defense:5,
// 		money:5,
// 		empirical:4
// 	},
// 	monster5:{
// 		live:150,
// 		attack:40,
// 		defense:20,
// 		money:8,
// 		empirical:6
// 	},
// 	monster6:{
// 		live:400,
// 		attack:90,
// 		defense:50,
// 		money:15,
// 		empirical:12
// 	},
// 	monster7:{
// 		live:100,
// 		attack:20,
// 		defense:5,
// 		money:3,
// 		empirical:3
// 	},
// 	monster8:{
// 		live:150,
// 		attack:65,
// 		defense:30,
// 		money:10,
// 		empirical:8
// 	},
// 	monster9:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster10:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster11:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster12:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster13:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster14:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster15:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster16:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster17:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster18:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster19:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster20:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster21:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster22:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster23:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster24:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster25:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster26:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster27:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster28:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster29:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster30:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster31:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster32:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	},
// 	monster33:{
// 		live:100,
// 		attack:100,
// 		defense:100,
// 		money:100,
// 		empirical:100
// 	}
// }
var monsters = [
	[
		{
			live:35,
			attack:18,
			defense:1,
			money:1,
			expirical:1
		}
	],//20
	[
		{
			live:45,
			attack:20,
			defense:2,
			money:2,
			expirical:2
		}
	],//21
	[
		{
			live:130,
			attack:60,
			defense:3,
			money:8,
			expirical:5
		}
	],//22
	[
		{
			live:50,
			attack:42,
			defense:6,
			money:6,
			expirical:4
		}
	],//23
	[
		{
			live:55,
			attack:52,
			defense:12,
			money:8,
			expirical:6
		}
	],//24
	[
		{
			live:100,
			attack:65,
			defense:15,
			money:30,
			expirical:12
		}
	],//25
	[
		{
			live:35,
			attack:38,
			defense:3,
			money:3,
			expirical:3
		}
	],//26
	[
		{
			live:60,
			attack:100,
			defense:8,
			money:12,
			expirical:8
		}
	],//27
	[
		{
			live:550,
			attack:160,
			defense:90,
			money:25,
			expirical:20
		}
	],//28
	[
		{
			live:260,
			attack:85,
			defense:5,
			money:18,
			expirical:10
		}
	],//29
	[
		{
			live:320,
			attack:120,
			defense:15,
			money:30,
			expirical:50
		}
	],//30
	[
		{
			live:60,
			attack:32,
			defense:8,
			money:5,
			expirical:7
		}
	],//31
	[
		{
			live:100,
			attack:95,
			defense:30,
			money:22,
			expirical:25
		}
	],//32
	[
		{
			live:100,
			attack:180,
			defense:110,
			money:50,
			expirical:19
		}
	],//33
	[
		{
			live:1500,
			attack:560,
			defense:460,
			money:60,
			expirical:60
		}
	],//34
	[
		{
			live:1250,
			attack:500,
			defense:400,
			money:55,
			expirical:55
		}
	],//35
	[
		{
			live:2000,
			attack:680,
			defense:590,
			money:70,
			expirical:65
		}
	],//36
	[
		{
			live:3333,
			attack:1200,
			defense:1133,
			money:112,
			expirical:100
		}
	],//37
	[
		{
			live:850,
			attack:350,
			defense:200,
			money:45,
			expirical:40
		}
	],//38
	[
		{
			live:900,
			attack:750,
			defense:650,
			money:77,
			expirical:70
		}
	],//39
	[
		{
			live:100,
			attack:680,
			defense:50,
			money:55,
			expirical:75
		}
	],//40
	[
		{
			live:250,
			attack:120,
			defense:70,
			money:20,
			expirical:17
		}
	],//41
	[
		{
			live:500,
			attack:400,
			defense:260,
			money:47,
			expirical:45
		}
	],//42
	[
		{
			live:20,
			attack:100,
			defense:68,
			money:28,
			expirical:15
		}
	],//43
	[
		{
			live:20,
			attack:100,
			defense:68,
			money:28,
			expirical:30
		}
	],//44
	[
		{
			live:3100,
			attack:1150,
			defense:1050,
			money:92,
			expirical:80
		}
	],//45
	[
		{
			live:1300,
			attack:300,
			defense:150,
			money:40,
			expirical:35
		}
	],//46
	[
		{
			live:2400,
			attack:2612,
			defense:2400,
			money:146,
			expirical:125
		}
	],//47
	[
		{
			live:3000,
			attack:2212,
			defense:1946,
			money:132,
			expirical:116
		}
	],//48
	[
		{
			live:15000,
			attack:1000,
			defense:1000,
			money:100,
			expirical:100
		}
	],//49
	[
		{
			live:20000,
			attack:1333,
			defense:1333,
			money:133,
			expirical:133
		}
	],//50
	[
		{
			live:30000,
			attack:1700,
			defense:1500,
			money:250,
			expirical:220
		}
	],//51
	[
		{
			live:60000,
			attack:3400,
			defense:3000,
			money:390,
			expirical:343
		}
	],//52
	[
		{
			live:99999,
			attack:5000,
			defense:4000,
			money:0,
			expirical:0
		}
	],//53
	[
		{
			live:320,
			attack:140,
			defense:20,
			money:30,
			expirical:0
		}
	],//54
	[
		{
			live:50,
			attack:48,
			defense:22,
			money:12,
			expirical:0
		}
	],//55
	[
		{
			live:4500,
			attack:560,
			defense:310,
			money:1000,
			expirical:0
		}
	],//56
	[
		{
			live:4500,
			attack:560,
			defense:310,
			money:1000,
			expirical:0
		}
	],//58
]