var mysql = require('mysql');
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

var connection = mysql.createConnection(source.jawsDB);
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;