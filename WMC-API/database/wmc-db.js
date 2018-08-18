//Web Med Central Database Configuration
//Specifying the connection to the database

//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose url
//Presently this is a sandbox database with user:test-db1-user & password: 12345678
// const url = 'mongodb://test-db1-user:12345678@ds163226.mlab.com:63226/test-db1';
const url = 'mongodb://localhost:27017/Webmed';

//Set up default mongoose connection
mongoose.connect(url, {
    useMongoClient: true
  });

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

console.log('WMC-Database Connected!');

module.exports = db;