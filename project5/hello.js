var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 31337);

app.get('/',function(req,res){
	var params = [];
//	res.render('get.handlebars');
//	get the parameters from the query that a user passes
	for(param in req.query){
		params.push({'name': param, 'value': req.query[param]});
	}

	var context = {};
	context.dataList = params;
	res.render('get.handlebars', context);
});

app.post('/',function(req,res){
	var context = {};
	var qParams = [];
	var bParams = [];
	console.log(req.query);
	console.log(req.body);
	//add parameters passed on the URI
	if(req.query){
		for (qparam in req.query){
			qParams.push({'name': qparam, 'value': req.query[qparam]});
		}
		context.qDataList = qParams;
		console.log(context);

	}

	//add parameters passed in body of POST request
	for(bparam in req.body){
		bParams.push({'name': bparam, 'value': req.body[bparam]});
	}
	context.bDataList = bParams;
	console.log(context);
	res.render('post.handlebars', context);
});

app.use(function(req,res){
	res.status(404);
	res.render('404');
});


app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
