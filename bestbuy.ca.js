/**
 * * Module dependencies.
 * */

require('dotenv/config')
//require('../bestbuy.ca.js')
var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');
var ENV = 'TEST';

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); 

var routes = require('./routes/routes.js');

app.set('port', process.env.PORT || 80);

switch (process.env.ENV){
   case 'DEV': 
	msg = 'Unleash the power of our people'
	break;
   case 'TEST':
	msg = 'Show respect, humility and integrity'
	break;
   case 'DR':
	msg = 'Learn from challenge and change'
        break;
   case 'PROD':
	msg = 'Have fun while being the best'
	break;
    default:
	msg = 'Environment not defined'
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  	
	  res.render(__dirname + '/views/index.html', {msg: msg});

}).listen(app.get('port'));

