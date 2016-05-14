
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
			name:    friend.name,
			photo:   friend.photo,
			q1:  friend.scores[0],
			q2:  friend.scores[1],
			q3:  friend.scores[2],
			q4:  friend.scores[3],
			q5:  friend.scores[4],
			q6:  friend.scores[5],
			q7:  friend.scores[6],
			q8:  friend.scores[7],
			q9:  friend.scores[8],
			q10: friend.scores[9],
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