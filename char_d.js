var lvlMult = [
	[1.000, 1.083, 1.165, 1.248, 1.330, 1.413, 1.495, 1.578, 1.661, 1.743, 1.826, 1.908, 1.991, 2.073, 2.156, 2.239, 2.321, 2.404, 2.486, 2.569, 2.651, 2.734, 2.817, 2.899, 2.982, 3.064, 3.147, 3.229, 3.312, 3.394, 3.477, 3.560, 3.704, 3.725, 3.807, 3.890, 3.972, 4.055, 4.138, 4.220, 4.303, 4.385, 4.468, 4.550, 4.633, 4.716, 4.798, 4.881, 4.963, 5.046,  5.128, 5.211, 5.294, 5.376, 5.459, 5.541, 5.624, 5.706, 5.789, 5.872, 5.954, 6.037, 6.119, 6.202, 6.284, 6.367, 6.450, 6.532, 6.615, 6.697, 6.780, 6.862, 6.945, 7.028, 7.110, 7.193, 7.275, 7.358, 7.440, 7.523, 7.606, 7.688, 7.771, 7.853, 7.936, 8.018, 8.101, 8.183, 8.266, 8.349],
	[1.000, 1.083, 1.166, 1.250, 1.333, 1.417, 1.500, 1.584, 1.668, 1.751, 1.835, 1.919, 2.003, 2.088, 2.172, 2.256, 2.341, 2.425, 2.510, 2.594, 2.679, 2.764, 2.849, 2.934, 3.019, 3.105, 3.190, 3.275, 3.361, 3.446, 3.532, 3.618, 3.704, 3.789, 3.875, 3.962, 4.048, 4.134, 4.220, 4.307, 4.393, 4.480, 4.567, 4.653, 4.740, 4.827, 4.914, 5.001, 5.089, 5.176, 5.263, 5.351, 5.438, 5.526, 5.614, 5.702, 5.790, 5.878, 5.966, 6.054, 6.142, 6.230, 6.319, 6.407, 6.496, 6.585, 6.673, 6.762, 6.851, 6.940, 7.029, 7.119, 7.208, 7.297, 7.387, 7.476, 7.566, 7.656, 7.746, 7.836, 7.926, 8.016, 8.106, 8.196, 8.286, 8.377, 8.467, 8.558, 8.649, 8.739]
];

var asc = [0, 0, 38, 38, 65, 101, 128, 155, 182];

const charId1 = {
	
	"name": "Albedo",
	"bHP": 1029.6,
   	"bATK": 19.6,
   	"bDEF": 68.2,
   	"rarity": 5,
   	"ele": "Geo",
   	"max_asc": [4228.0, 80.3, 280.1],
   	"cons3&5": ["talent_2", "talent_3"],
   	"getBaseHP": function(currLvl, maxLvl){

   		return Math.round(this.bHP*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[0]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseATK":function(currLvl, maxLvl){

   		return Math.round(this.bATK*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[1]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseDEF": function(currLvl, maxLvl){

   		return Math.round(this.bDEF*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[2]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"passive_1": function(){},
   	"passive_2": function(){},
   	"passive_3": function(){}
};

const charId2 = {
	
	"name": "Aloy",
	"bHP": 848.5,
   	"bATK": 18.2,
   	"bDEF": 52.7,
   	"rarity": 5,
   	"ele": "Cryo",
   	"max_asc": [3484.2, 74.8, 216.2],
   	"cons3&5": ["None", "None"],
   	"getBaseHP": function(currLvl, maxLvl){

   		return Math.round(this.bHP*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[0]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseATK":function(currLvl, maxLvl){

   		return Math.round(this.bATK*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[1]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseDEF": function(currLvl, maxLvl){

   		return Math.round(this.bDEF*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[2]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"passive_1": function(){},
   	"passive_2": function(){},
   	"passive_3": function(){}
};

const charId3 = {
	
	"name": "Amber",
	"bHP": 793.3,
   	"bATK": 18.7,
   	"bDEF": 50.4,
   	"rarity": 4,
   	"ele": "Pyro",
   	"max_asc": [2838.3, 67.0, 180.2],
   	"cons3&5": ["talent_3", "talent_2"],
   	"getBaseHP": function(currLvl, maxLvl){

   		return Math.round(this.bHP*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[0]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseATK":function(currLvl, maxLvl){

   		return Math.round(this.bATK*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[1]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseDEF": function(currLvl, maxLvl){

   		return Math.round(this.bDEF*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[2]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"passive_1": function(){},
   	"passive_2": function(){},
   	"passive_3": function(){}
};

const charId4 = {
	
	"name": "Itto",
	"bHP": 1001.0,
   	"bATK": 17.7,
   	"bDEF": 74.7,
   	"rarity": 5,
   	"ele": "Geo",
   	"max_asc": [4110.6, 73.6, 306.6],
   	"cons3&5": ["talent_2", "talent_3"],
   	"getBaseHP": function(currLvl, maxLvl){

   		return Math.round(this.bHP*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[0]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseATK":function(currLvl, maxLvl){

   		return Math.round(this.bATK*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[1]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseDEF": function(currLvl, maxLvl){

   		return Math.round(this.bDEF*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[2]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"passive_1": function(){},
   	"passive_2": function(){},
   	"passive_3": function(){}
};

const charId5 = {
	
	"name": "Barbara",
	"bHP": 820.6,
   	"bATK": 13.4,
   	"bDEF": 56.1,
   	"rarity": 4,
   	"ele": "Hydro",
   	"max_asc": [2936.1, 47.8, 200.7],
   	"cons3&5": ["talent_3", "talent_2"],
   	"getBaseHP": function(currLvl, maxLvl){

   		return Math.round(this.bHP*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[0]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseATK":function(currLvl, maxLvl){

   		return Math.round(this.bATK*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[1]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseDEF": function(currLvl, maxLvl){

   		return Math.round(this.bDEF*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[2]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"passive_1": function(){},
   	"passive_2": function(){},
   	"passive_3": function(){}
};

const charId6 = {
	
	"name": "Beidou",
	"bHP": 1094.1,
   	"bATK": 18.9,
   	"bDEF": 54.4,
   	"rarity": 4,
   	"ele": "Electro",
   	"max_asc": [3914.8, 67.4, 194.5],
   	"cons3&5": ["talent_2", "talent_3"],
   	"getBaseHP": function(currLvl, maxLvl){

   		return Math.round(this.bHP*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[0]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseATK":function(currLvl, maxLvl){

   		return Math.round(this.bATK*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[1]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseDEF": function(currLvl, maxLvl){

   		return Math.round(this.bDEF*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[2]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"passive_1": function(){},
   	"passive_2": function(){},
   	"passive_3": function(){}
};

const charId7 = {
	
	"name": "Bennett",
	"bHP": 1039.4,
   	"bATK": 16.0,
   	"bDEF": 64.7,
   	"rarity": 4,
   	"ele": "Pyro",
   	"max_asc": [3719.1, 57.3, 231.4],
   	"cons3&5": ["talent_2", "talent_3"],
   	"getBaseHP": function(currLvl, maxLvl){

   		return Math.round(this.bHP*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[0]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseATK":function(currLvl, maxLvl){

   		return Math.round(this.bATK*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[1]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseDEF": function(currLvl, maxLvl){

   		return Math.round(this.bDEF*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[2]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"passive_1": function(){},
   	"passive_2": function(){},
   	"passive_3": function(){}
};

const charId8 = {
	
	"name": "Chongyun",
	"bHP": 920.9,
   	"bATK": 18.7,
   	"bDEF": 54.4,
   	"rarity": 4,
   	"ele": "Cryo",
   	"max_asc": [3295.0, 66.9, 194.5],
   	"cons3&5": ["talent_3", "talent_2"],
   	"getBaseHP": function(currLvl, maxLvl){

   		return Math.round(this.bHP*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[0]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseATK":function(currLvl, maxLvl){

   		return Math.round(this.bATK*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[1]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseDEF": function(currLvl, maxLvl){

   		return Math.round(this.bDEF*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[2]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"passive_1": function(){},
   	"passive_2": function(){},
   	"passive_3": function(){}
};

const charId9 = {
	
	"name": "Diluc",
	"bHP": 1010.5,
   	"bATK": 26.1,
   	"bDEF": 61.0,
   	"rarity": 5,
   	"ele": "Pyro",
   	"max_asc": [4149.7, 107.0, 250.6],
   	"cons3&5": ["talent_2", "talent_3"],
   	"getBaseHP": function(currLvl, maxLvl){

   		return Math.round(this.bHP*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[0]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseATK":function(currLvl, maxLvl){

   		return Math.round(this.bATK*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[1]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseDEF": function(currLvl, maxLvl){

   		return Math.round(this.bDEF*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[2]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"passive_1": function(){},
   	"passive_2": function(){},
   	"passive_3": function(){}
};

const charId10 = {
	
	"name": "Diona",
	"bHP": 802.4,
   	"bATK": 17.8,
   	"bDEF": 50.4,
   	"rarity": 4,
   	"ele": "Cryo",
   	"max_asc": [2870.9, 63.7, 180.2],
   	"cons3&5": ["talent_3", "talent_2"],
   	"getBaseHP": function(currLvl, maxLvl){

   		return Math.round(this.bHP*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[0]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseATK":function(currLvl, maxLvl){

   		return Math.round(this.bATK*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[1]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseDEF": function(currLvl, maxLvl){

   		return Math.round(this.bDEF*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[2]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"passive_1": function(){},
   	"passive_2": function(){},
   	"passive_3": function(){}
};

const charId11 = {
	
	"name": "Eula",
	"bHP": 1029.6,
   	"bATK": 26.6,
   	"bDEF": 58.4,
   	"rarity": 5,
   	"ele": "Cryo",
   	"max_asc": [4228.0, 109.3, 240.0],
   	"cons3&5": ["talent_3", "talent_2"],
   	"getBaseHP": function(currLvl, maxLvl){

   		return Math.round(this.bHP*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[0]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseATK":function(currLvl, maxLvl){

   		return Math.round(this.bATK*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[1]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseDEF": function(currLvl, maxLvl){

   		return Math.round(this.bDEF*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[2]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"passive_1": function(){},
   	"passive_2": function(){},
   	"passive_3": function(){}
};

const charId12 = {
	
	"name": "Fischl",
	"bHP": 770.4,
   	"bATK": 20.4,
   	"bDEF": 49.8,
   	"rarity": 4,
   	"ele": "Cryo",
   	"max_asc": [2870.9, 63.7, 180.2],
   	"cons3&5": ["talent_3", "talent_2"],
   	"getBaseHP": function(currLvl, maxLvl){

   		return Math.round(this.bHP*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[0]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseATK":function(currLvl, maxLvl){

   		return Math.round(this.bATK*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[1]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"getBaseDEF": function(currLvl, maxLvl){

   		return Math.round(this.bDEF*lvlMult[parseInt(this.rarity)-4][currLvl-1] + this.max_asc[2]*asc[parseInt((maxLvl-10)/10)]/182);
   	},
   	"passive_1": function(){},
   	"passive_2": function(){},
   	"passive_3": function(){}
};