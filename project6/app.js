var express = require('express');
var mysql = require('./dbcon.js');
var helpers = require('handlebars-helpers')();

var app = express();
var handlebars = require('express-handlebars').create({
	defaultLayout:'main'
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 31338);
app.use(express.static('public'));


app.get('/', function(req, res, next){
	var context = {};
	mysql.pool.query('SELECT * FROM workouts', function(err, rows, fields){
		if(err){
			next(err);
			return;
		}
		context.results = rows;
		console.log(context);
		res.render('home.handlebars', context);
	});
});

app.get('/edit', function(req, res, next){
	var context = {};
	var pri_Key = req.query.q;
	var sqlStatement = 'SELECT * FROM workouts WHERE id=' + pri_Key;
	console.log(sqlStatement);
	mysql.pool.query(sqlStatement, function(err, rows, field){
		console.log("executing mysql");
		if(err){
			next(err);
			return;
		}
		context.results = rows;
		console.log(context);
		res.render('edit.handlebars', context);
	});
});

app.get('/delete', function(req, res, next){
	var pri_Key = req.query.q;
	console.log("inside /deleting, deleting: " + pri_Key);
	mysql.pool.query("DELETE FROM workouts WHERE id=?", [req.query.q], function(err, rows, fields){
		if(err){
			next(err);
			return;
		}
		//This will not redneder home on the users browser, just need to the success status code returned
		//so that the code in docScript.js will continue
		res.status(200).send("succss");
	})
})

app.post('/update', function(req, res, next){
	var context = {};
	console.log("Inside /update: " + req.body.name + "," + req.body.reps + "," + req.body.id);
	mysql.pool.query("UPDATE workouts SET name=?, reps=?, weight=?, date=?, lbs=? WHERE id=? ",
		[req.body.name, req.body.reps, req.body.weight, req.body.date, req.body.lbs, req.body.id],
		function(err, rows, fields){
			if(err){
				next(err);
				return;
			}
			console.log('test');
			mysql.pool.query('SELECT * FROM workouts', function(err, rows, fields){
				if(err){
					next(err);
					return;
				}
				context.results = rows;
				console.log(context);
				res.render('home.handlebars', context);
			})
		}
	)

})


app.post('/new', function(req, res, next){
	var context = {};
	//Update the workouts table
	mysql.pool.query("INSERT INTO workouts (`name`, `reps`, `weight`, `date`, `lbs`) VALUES (?,?,?,?,?)", 
		[req.body.name, req.body.reps, req.body.weight, req.body.date, req.body.lbs], 
		function(err, rows, fields){
			if(err){
				next(err);
				return;
			}
			context.results = JSON.stringify(rows);
			console.log(context);
			mysql.pool.query("SELECT * FROM workouts WHERE name=? AND reps=? AND weight=? AND date=? AND lbs=?",
				[req.body.name, req.body.reps, req.body.weight, req.body.date, req.body.lbs], function(err, rows, fields){

					if(err){
						next(err);
						return;
					}
					console.log(rows);
					console.log(JSON.stringify(rows));
					res.send(rows);
				})
		});

});


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
