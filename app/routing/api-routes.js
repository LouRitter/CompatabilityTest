
// ===============================================================================
var orm 			= require ("../config/orm.js");
var friendData 	= require('../data/friends.js');
var path 			= require('path');
var mysql 			= require('mysql');
var connection = require('../config/connection.js');
var friends	= require("../model/character.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){
	
	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});

	app.post('/api/friends', function(req, res){
		var bestMatch = {};
		var bestDifference = 1000;

			var friend =req.body;
			friendData.push(friend);
		
		friends.sync().then(function () {
			// Table created
			return friends.create({
			name:    newUsr.name,
			photo:   newUsr.photo,
			score1:  newUsr.scores[0],
			score2:  newUsr.scores[1],
			score3:  newUsr.scores[2],
			score4:  newUsr.scores[3],
			score5:  newUsr.scores[4],
			score6:  newUsr.scores[5],
			score7:  newUsr.scores[6],
			score8:  newUsr.scores[7],
			score9:  newUsr.scores[8],
			score10: newUsr.scores[9],
			});
		});
			
			for (var i = 0; i < friendData.length - 1; i++) {
				var totalDifference=0;
				for (var k=0 ; k < 9; k ++) {
					 var diff= Math.abs(parseInt(friend.scores[k]) - parseInt(friendData[i].scores[k]));
					 totalDifference=totalDifference+diff;
					 if(totalDifference < bestDifference){
					 	bestDifference=totalDifference;
					 	bestMatch = friendData[i];
					 }
							 

				}	
			};

			console.log(bestMatch);
		
			res.json(bestMatch); // KEY LINE

});

};