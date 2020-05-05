var express = require( 'express' );
var ejs = require( 'ejs' );
var ejsLocals = require( 'ejs-locals' );
var path = require('path');
var routes = require('./routes/');

var app = express();

//view engine
app.engine('ejs', ejsLocals);

app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

app.use( express.static(path.join( __dirname, '/assets' )));

//routes
app.use('/', routes);

//server
app.listen('3000', ()=> {

	console.log('App listening on http://localhost:3000/');

});