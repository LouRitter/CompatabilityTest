var Sequelize = require("sequelize"); 
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 

// Creates a "Character" model that matches up with DB
var friends = sequelize.define("users", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
	},
	photo: {
		type: Sequelize.STRING,
	},
	score1: {
		type: Sequelize.INTEGER,
	},
	score2: {
		type: Sequelize.INTEGER,
	},
	score3: {
		type: Sequelize.INTEGER,
	},
	score4: {
		type: Sequelize.INTEGER,
	},
	score5: {
		type: Sequelize.INTEGER,
	},
	score6: {
		type: Sequelize.INTEGER,
	},
	score7: {
		type: Sequelize.INTEGER,
	},
	score8: {
		type: Sequelize.INTEGER,
	},
	score9: {
		type: Sequelize.INTEGER,
	},
	score10: {
		type: Sequelize.INTEGER,
	}
	},
		{
		createdAt: false,
		updatedAt: false
	});

// Syncs with DB
friends.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = users;
