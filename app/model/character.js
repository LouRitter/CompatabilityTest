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
	q1: {
		type: Sequelize.INTEGER,
	},
	q2: {
		type: Sequelize.INTEGER,
	},
	q3: {
		type: Sequelize.INTEGER,
	},
	q4: {
		type: Sequelize.INTEGER,
	},
	q5: {
		type: Sequelize.INTEGER,
	},
	q6: {
		type: Sequelize.INTEGER,
	},
	q7: {
		type: Sequelize.INTEGER,
	},
	q8: {
		type: Sequelize.INTEGER,
	},
	q9: {
		type: Sequelize.INTEGER,
	},
	q10: {
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
module.exports = friends;
