
//app.js used for configuring the application

const express = require('express'); //getting express module
const db = require('../database/wmc-db'); //Database connection file
const UserController = require('../user/UserController');
const DataController = require('../user/DataController');
const app = express();

const cors = require('cors');
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.setHeader('Access-Control-Allow-Methods', 'POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
  });
//app.use(cors());

//importing UserController and it appears /user/allOtherURIs
app.use('/user', UserController);
app.use('/data', DataController);
app.get('/', function(req, res){
	res.send('Welcome to WMC-API');
});








//this should be exported because to make available all the imported modules in this file
module.exports = app;