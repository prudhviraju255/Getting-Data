//DataController for all data operations
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Collections = require('../database/Collections');

const dR = express();
dR.use(bodyParser.json());
dR.use(bodyParser.urlencoded({ extended: true }));

dR.get('/', (req, res)=>{
	res.send('Welcome to DataController');
})

dR.get('/getSubjectCategories', (req, res)=>{
	Collections.subjectCategories.find({}, function(err, result){
		if(err) return res.status(500).send('No subject categories found');
		if(result){
			res.status(200).send(result);
		}else{
			res.status(500).send("No data Found");
		}
	});
})

dR.get('/getArticleTypes', (req, res) => {
	Collections.articleTypes.find({}, function (err, result) {
		if (err) return res.status(500).send("There was a problem finding the user");
		if (result) {
			res.status(200).send(result);
		} else {
			res.status(500).send("No Typed found ");
		}
	});
});


// dR.get('/getClients', (req, res) => {
//     Collections.client.find({}, function (err, result) {
//         if (err) return res.status(500).send("There was a problem finding the user");
//         if (result) {
//                 res.status(200).send(result);
//         } else {
//                 res.status(500).send("No Typed found ");
//         }
//     });
// });


dR.get('/getUser', (req, res) => {
	Collections.users.find({}, function (err, result) {
		if (err) return res.status(500).send("There was a problem finding the user");
		if (result) {
			res.status(200).send(result);
		} else {
			res.status(500).send("No Typed found ");
		}
	});
});
module.exports = dR;