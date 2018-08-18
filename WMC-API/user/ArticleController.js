//UserController for all user operations
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Collections = require('../database/Collections');
const multer = require('multer');
const path = require('path');

const SERVER_DIR = 'F:/WMC-API/uploads/';

const router = express();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
res.send('Welcome to ArticleController');
});

router.post('/addArticle', (req, res) => {
Collections.user.update(req.body.user, {
$push: {
article: req.body.article
}
}, function (error, resp) {
if (error) return console.log("Error: " + error.message);
var fs = require('fs');
//Folder for individual user to store their data and uploads
var dir = SERVER_DIR + req.body.user._id + '/articles/' + req.body.article.articleId;
if (!fs.existsSync(dir)) {
//IF the directory not exists create one with created article's ID as name of the folder
fs.mkdirSync(dir);
fs.mkdirSync(dir + '/Additionalfiles');
fs.mkdirSync(dir + '/Illustrations');
}
res.status(200).send(resp);
});
});

router.post('/addSubjectCat', function (req, res) {
Collections.user.updateOne({ _id: req.body.userId, "article.articleId": parseInt(req.body.articleId) },
{ $push: { "article.$.subject_category": req.body.subject_category } },
function (error, resp) {
if (error) return console.log("Error: " + error.message);
res.status(200).send(resp);
});
});

// router.get('/test', function (req, res) {
//     res.send(`
//  <html>
//   <body>
//     <form ref='uploadForm'
//       id='uploadForm'
//       action='addAuthorProof'
//       method='post'
//       encType="multipart/form-data">
//         <input type="file" name="file" multiple/>
//         <input type='submit' value='Upload!' />
//     </form>
//   </body>
// </html>
//  `);
// });

router.post('/addStack/:userId/:dataName', function (req, res) {
//getting userId from localStorage
var userId = req.params.userId;
var dataName = req.params.dataName;
var dirName = SERVER_DIR + userId + '/articles/stack';
//Defining a result JSON for sending status as response
var result = {
dbStatus: {},
fileStatus: ""
};
//Middleware for Uploading Files
var storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, dirName);
},
filename: function (req, file, cb) {
var filename = Date.now() + path.extname(file.originalname);
Collections.user.updateOne({ _id: userId },
{ $push: { "stack": { dataName: dataName, dataValue: dirName + '/' + filename } } },
function (error, resp) {
if (error) return console.log("Error: " + error.message);
//res.status(200).send(resp);
result.dbStatus = resp;
});
cb(null, filename);
}
});
var upload = multer({ storage: storage }).array('file');
upload(req, res, function (err) {
if (err) {
return res.end(err.toString());
}
result.fileStatus = "Success";
res.send(result);
});
});

router.post('/saveArticleAuthors', function (req, res) {
console.log(req.body);
Collections.user.updateOne({ _id: req.body._id },
{ $push: { "stack": { dataName: "selectedAuthors", dataValue: req.body.authors } } },

function (error, resp) {
if (error) return console.log("Error: " + error.message);
res.status(200).send(resp);
});
});

router.post('/saveFiles/:userId/:articleId/:fileSection', function (req, res) {
var userId = req.params.userId;
var fileSection = req.params.fileSection;
var articleId = req.params.articleId;
var dirName = SERVER_DIR + userId + '/articles/' + articleId + '/' + fileSection;
var filename = '';
//Defining a result JSON for sending status as response
var result = {
dbStatus: {},
fileStatus: false,
path: false
};
//Middleware for Uploading Files
var storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, dirName);
},
filename: function (req, file, cb) {
filename = Date.now() + path.extname(file.originalname);
console.log(file);
cb(null, filename);
}
});
var upload = multer({ storage: storage }).array('file');
upload(req, res, function (err) {
if (err) {
return res.end(err.toString());
}
result.fileStatus = "uploaded";
result.path = dirName + '/' + filename;
res.send(result);
});
});

router.post('/deleteFile', function (req, res) {
var fs = require('fs');
var dir = req.body.path;
console.log(dir);
if (fs.existsSync(dir)) {
fs.unlinkSync(dir);
res.send("Deleted");
} else {
res.send("File Not Found");
}
});






router.post('/addAdvance/:userId/:dataName', function (req, res) {
//getting userId from localStorage
var userId = req.params.userId;
var dataName = req.params.dataName;
var dirName = SERVER_DIR + userId + '/articles/advance';
//Defining a result JSON for sending status as response
var result = {
dbStatus: {},
fileStatus: ""
};
//Middleware for Uploading Files
var storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, dirName);
},
filename: function (req, file, cb) {
var filename = Date.now() + path.extname(file.originalname);
Collections.user.updateOne({ _id: userId },
{ $push: { "advance": { dataName: dataName, dataValue: dirName + '/' + filename } } },
function (error, resp) {
if (error) return console.log("Error: " + error.message);
//res.status(200).send(resp);
result.dbStatus = resp;
});
cb(null, filename);
}
});
var upload = multer({ storage: storage }).array('file');
upload(req, res, function (err) {
if (err) {
return res.end(err.toString());
}
result.fileStatus = "Success";
res.send(result);
});
});

router.post('/saveArticleAuthors', function (req, res) {
console.log(req.body);
Collections.user.updateOne({ _id: req.body._id },
{ $push: { "advance": { dataName: "selectedAuthors", dataValue: req.body.authors } } },

function (error, resp) {
if (error) return console.log("Error: " + error.message);
res.status(200).send(resp);
});
});

router.post('/saveFiles/:userId/:articleId/:fileSection', function (req, res) {
var userId = req.params.userId;
var fileSection = req.params.fileSection;
var articleId = req.params.articleId;
var dirName = SERVER_DIR + userId + '/articles/' + articleId + '/' + fileSection;
var filename = '';
//Defining a result JSON for sending status as response
var result = {
dbStatus: {},
fileStatus: false,
path: false
};
//Middleware for Uploading Files
var storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, dirName);
},
filename: function (req, file, cb) {
filename = Date.now() + path.extname(file.originalname);
console.log(file);
cb(null, filename);
}
});
var upload = multer({ storage: storage }).array('file');
upload(req, res, function (err) {
if (err) {
return res.end(err.toString());
}
result.fileStatus = "uploaded";
result.path = dirName + '/' + filename;
res.send(result);
});
});

router.post('/deleteFile', function (req, res) {
var fs = require('fs');
var dir = req.body.path;
console.log(dir);
if (fs.existsSync(dir)) {
fs.unlinkSync(dir);
res.send("Deleted");
} else {
res.send("File Not Found");
}
});

router.post('/addBasic/:userId/:dataName', function (req, res) {
//getting userId from localStorage
var userId = req.params.userId;
var dataName = req.params.dataName;
var dirName = SERVER_DIR + userId + '/articles/basic';
//Defining a result JSON for sending status as response
var result = {
dbStatus: {},
fileStatus: ""
};
//Middleware for Uploading Files
var storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, dirName);
},
filename: function (req, file, cb) {
var filename = Date.now() + path.extname(file.originalname);
Collections.user.updateOne({ _id: userId },
{ $push: { "basic": { dataName: dataName, dataValue: dirName + '/' + filename } } },
function (error, resp) {
if (error) return console.log("Error: " + error.message);
//res.status(200).send(resp);
result.dbStatus = resp;
});
cb(null, filename);
}
});
var upload = multer({ storage: storage }).array('file');
upload(req, res, function (err) {
if (err) {
return res.end(err.toString());
}
result.fileStatus = "Success";
res.send(result);
});
});

router.post('/saveArticleAuthors', function (req, res) {
console.log(req.body);
Collections.user.updateOne({ _id: req.body._id },
{ $push: { "basic": { dataName: "selectedAuthors", dataValue: req.body.authors } } },

function (error, resp) {
if (error) return console.log("Error: " + error.message);
res.status(200).send(resp);
});
});

router.post('/saveFiles/:userId/:articleId/:fileSection', function (req, res) {
var userId = req.params.userId;
var fileSection = req.params.fileSection;
var articleId = req.params.articleId;
var dirName = SERVER_DIR + userId + '/articles/' + articleId + '/' + fileSection;
var filename = '';
//Defining a result JSON for sending status as response
var result = {
dbStatus: {},
fileStatus: false,
path: false
};
//Middleware for Uploading Files
var storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, dirName);
},
filename: function (req, file, cb) {
filename = Date.now() + path.extname(file.originalname);
console.log(file);
cb(null, filename);
}
});
var upload = multer({ storage: storage }).array('file');
upload(req, res, function (err) {
if (err) {
return res.end(err.toString());
}
result.fileStatus = "uploaded";
result.path = dirName + '/' + filename;
res.send(result);
});
});

router.post('/deleteFile', function (req, res) {
var fs = require('fs');
var dir = req.body.path;
console.log(dir);
if (fs.existsSync(dir)) {
fs.unlinkSync(dir);
res.send("Deleted");
} else {
res.send("File Not Found");
}
});

module.exports = router;
