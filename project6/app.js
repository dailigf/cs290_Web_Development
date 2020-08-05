var express = require('express');
var mysql = require('./dbcon.js');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 31337);



app.get('/reset-table', function(req, res, next){
	var context = {};
	mysql.pool.query("DROP TABLE IF EXISTS workouts", function(err){
		var createString = "CREATE TABLE workouts (" +
			"id INT PRIMARY KEY AUTO_INCREMENT," +
			"name VARCHAR(255) NOT NULL," +
			"reps INT," +
			"weight INT," +
			"date DATE," +
			"lbs BOOLEAN)";
		mysql.pool.query(createString, function(err){
			context.results = "Table reset";
			res.render('home.handlebars', context);
		});

	});
});

app.listen(app.get('port'), function(){
	console.log('Express tarted on http://localhost' + app.get('port') + '; press Ctrl-C to exit');
});
