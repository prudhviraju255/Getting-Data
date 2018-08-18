'use strict' ;

// const express = require('express');
// wmc-server.js for spinning up the node server on a specific port 3000

var app = require('./app/app');           //making all the modules in app.js available

var port = process.env.PORT || 3000 ; //setting port 

var server = app.listen(port, function(){
	console.log("WMC-Server is running on http://localhost:%s", port);
});