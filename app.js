var express = require('express'),
	app 	= express(),
	server 	= require('http').createServer(app),
	path 	= require('path');
// set default server port
var port = process.env.PORT || 9000;

app.set('view engine', 'html');
// set client index url (view)
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function(){
	console.log('Express server listening on %d', port);
});