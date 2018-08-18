//UserController for all user operations
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Collections = require('../database/Collections');
const ArticleController = require('./ArticleController');

const userRouter = express();
userRouter.use(bodyParser.json());
userRouter.use(bodyParser.urlencoded({ extended: false }));


userRouter.get('/', (req, res) => {
res.send('Welcome to UserController');
});

userRouter.use('/article', ArticleController);

userRouter.get('/getUsers', (req, res) => {
Collections.user.find({}, function (err, result) {
if (err) return res.status(500).send("There was a problem finding the user");
if (result) {
res.status(200).send(result);
} else {
res.status(500).send("username or passowrd incorrect " + JSON.stringify(user));
}
});
});

userRouter.post('/insertUser', (req, res) => {
var user = {
username: req.body.username,
uemail: req.body.uemail,
upassword: req.body.upassword,
title: req.body.title,
fname: req.body.fname,
mname:req.body.mname,
lname: req.body.lname,
designation: req.body.designation,
department: req.body.department,
institute: req.body.institute,
city:req.body.city,
address:req.body.address,
country:req.body.country,
zipcode:req.body.zipcode,
interest:req.body.interest,
preference:req.body.preference,
added_on: Date()
};

Collections.user.create(user, function (err, r) {
if (err) return res.status(500).send("There was a problem adding the information to the database");
var fs = require('fs');
//Folder for individual user to store their data and uploads
var dir = './uploads/' + r._id;
if (!fs.existsSync(dir)) {
//IF the directory not exists create one with created user's ID as name of the folder
fs.mkdirSync(dir);
fs.mkdirSync(dir+'/articles');
fs.mkdirSync(dir+'/articles/Additionalfiles');
fs.mkdirSync(dir+'/articles/Illustrations');
fs.mkdirSync(dir+'/articles/stack');
}
res.status(200).send("Hello "+r.username);
});
});




userRouter.post('/updateUser', (req, res) => {
if (req.body.user && req.body.user) {
Collections.user.update(req.body.user, {
$set: req.body.data
}, function (err, resoo) {
if (err) return console.log("Error: " + err.message);
res.status(200).send(resoo);
});
} else {
res.status(500).send("No Data sent!" + JSON.stringify(req.body));
}
});

userRouter.post('/findUser', (req, res) => {
var user = {
username: req.body.username,
upassword: req.body.upassword,
};
Collections.user.findOne(user, function (err, result) {
if (err) return res.status(500).send("There was a problem finding the user");
if (result) {
res.status(200).send(result);
} else {
res.status(500).send("username or passowrd incorrect " + JSON.stringify(user));
}
});
});


userRouter.post('/findAdmin', function (req, res) {
    
    var admindetails = { 
    email: req.body.email,
    password: req.body.password,
    };
console.log(admindetails);

    Collections.admin.findOne(admindetails, function (err, result) {
    if (err) return res.status(500).send("There was a problem finding the user");
    if (result) {
        console.log('Result');
   return res.status(200).send(result);
} else {
    console.log('false result');
   return res.status(500).send("email or passowrd incorrect " + JSON.stringify(admindetails));
}
});
});

//Getting User with ID
userRouter.post('/getUser', function (req, res)  {
var user = {
_id: req.body.userId,
};
Collections.user.find(req.body.user, function (err, result) {
if (err) return res.status(500).send("There was a problem finding the user");
if (result) {
res.status(200).send(result.userDetails);
} else {
res.status(500).send("User Not Found with Details: " + JSON.stringify(user));
}
});
});


//Getting Basic with ID
userRouter.post('/addBasic', (req, res)=> {
    // var user = {
    // _id: req.body.userId,
    // };

    Collections.user.find({}, {"basics":1}, function (err, result) {
        $push: {
            basics:data
        }
        }, function (error, resp){
    if (error) return console.log("There was a problem finding the user");
    res.status(200).send(resp);
    })
    });









userRouter.post('/addAuthor', function (req, res) {
var user = req.body.user;
var data = req.body.author;

Collections.user.update(user, {
$push: {
authors: data
}
}, function (error, resp) {
if (error) return console.log("Error: " + error.message);
res.status(200).send(resp);
})
});

userRouter.post('/insertBasic', (req, res) => {

var user = req.body.user;
var data = req.body.basic;

Collections.user.update(user, {
$push: {
basics: data
}
}, function (error, resp) {
if (error) return console.log("Error: " + error.message);
res.status(200).send(resp);
})
});


userRouter.post('/insertAdvanced', (req, res) => {

var user = req.body.user;
var data = req.body.advanced;

Collections.user.update(user, {
$push: {
advances: data
}
}, function (error, resp) {
if (error) return console.log("Error: " + error.message);
res.status(200).send(resp);
})
});


userRouter.post('/getAuthors', function (req, res) {
Collections.user.find(req.body.user, function (err, result) {
if (err) res.status(500).send("There was a problem finding the user");
//console.log(result[0].authors);
if (result.length > 0) {
res.status(200).send(result[0].authors);
}
}).select({ "authors": 1 });
});


userRouter.post('/deleteAuthor', function (req, res) {
console.log(req.body);
Collections.user.update({_id: req.body._id}, {
$pull: {
authors : {
authorId: req.body.authorId
}
}
}, function (error, resp) {
if (error) return console.log("Error: " + error.message);
res.status(200).send(resp);
})
});
userRouter.post('/updatedPassword', function (req, res) {
    console.log(req.body);
    Collections.user.update({_id: req.body._id}, {
    upassword: req.body.newpassword

}, function (error, resp) {
if (error) return console.log("Error: " + error.message);
res.status(200).send(resp);
})



});


userRouter.post('/verifyPassword', (req, res) => {

    Collections.user.findOne({_id: req.body._id}, {
        upassword: req.body.currentpassword
    
}, function (error, result) {
    if (error) return console.log("Error: " + error.message);
    if (result) {
        res.status(200).send(result.upassword);
    } else {
        res.status(500).send("current  passowrd incorrect " + JSON.stringify(user));
    }
})


});















//Getting User with ID
userRouter.post('/getWeb', (req, res) => {
    // console.log(JSON.stringify(req.body));
    // var user = {
    // _id: req.body.userId,
    // };

    Collections.user.find({}, function (err, result) {
    if (err) return res.status(500).send("There was a problem finding the user");
    if (result) {
    return res.status(200).send(result);
    } else {
   return res.status(500).send("User Not Found with Details: " + JSON.stringify(user));
    }
    });
    });
    


module.exports = userRouter;