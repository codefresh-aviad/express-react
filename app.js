var express = require('express'),
	app 	= express(),
	server 	= require('http').createServer(app),
	path 	= require('path');
// set default server port
var port = process.env.PORT || 9000;

app.set('view engine', 'html');
// set client index url (view)
app.get('/', function(req, res){
    res.sendFile(__dirname + '/app/index.html');
});

// start the server
server.listen(port, function(){
    console.log('Express server listening on %d', port);
});