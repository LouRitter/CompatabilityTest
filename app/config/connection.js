var mysql = require('mysql');
var Sequelize = require("sequelize");

var source ={
     localhost:{
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "Eliza1220",
        database: "friends"
    }, 
     jawsDB:{
        port:3306,
        host:   'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user:   'btsiwsorbhshww5p',
        password:'w8re2jj6hjx8ht68',
        database: 'wcm3v4y15q096ojf'
     }
    };

var selectedSource = source.jawsDB;

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  host: selectedSource.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

module.exports = sequelize;