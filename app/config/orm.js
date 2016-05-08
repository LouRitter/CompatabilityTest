// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require('./connection.js');

// ORM 
// =============================================================
var orm = {

	// Here our ORM is creating a simple method for performing a query of the entire table.
	// We make use of the callback to ensure that data is returned only once the query is done.
	allFriends: function(callback){
		var s = 'SELECT * FROM friends;'

		connection.query(s, function(err, result) {
	 
            callback(result);

        });
	},

	// Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement. 

	addFriends: function(friend, callback){
		var s = "INSERT INTO friendly(name, photoLink, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
		connection.query(s,[friend.name, friend.photoLink, friend.scores[0], friend.scores[1], friend.scores[2], friend.scores[3], friend.scores[4], friend.scores[5], friend.scores[6], friend.scores[7], friend.scores[8], friend.scores[9]], function(err, result) {
			callback(result);
        });
        
	}


};

module.exports = orm;