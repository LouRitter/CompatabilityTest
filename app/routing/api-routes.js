
// ===============================================================================
var orm 			= require ("../config/orm.js");
var friendData 	= require('../data/friends.js');
var path 			= require('path');
var mysql 			= require('mysql');
var connection = require('../config/connection.js');

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
		 	orm.addFriends(friend, function(data){	
		 });
			
			for (var i = 0; i < friendData.length - 1; i++) {
				var totalDifference=0;
				for (var k=0 ; k < 10; k ++) {
					 var diff= Math.abs(req.body.scores[k] - friendData[i].scores[k]);
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