//All the collections are grabbed here
const mongoose = require('mongoose');
const db = require('./wmc-db'); //Database connection file

var userSchema = new mongoose.Schema({
    username: String,
    uemail: String,
    upassword: String,
    title: String,
    fname: String,
    mname:String,
    lname: String,
    designation: String,
    department: String,
    institute: String,
    address: String,
    //telephone:String,
    //fax:String,
    city: String,
    country: String,
    postal_code: Number,
    // interests: [String],
    roles: [String],
    consultant: Boolean,
    subscribed: Boolean,
    registration: String,
    article: [{ type: mongoose.Schema.Types.Object, ref: 'articleSchema' }],
    authors: [{ type: mongoose.Schema.Types.Object, ref: 'authorSchema' }],
    basics: [{type:mongoose.Schema.Types.Object, ref: 'basicSchema' }],
    advances:[{type:mongoose.Schema.Types.Object, ref: 'advancedSchema' }],
    credits: Number,
    added_on: String,
    stack: [{ type: mongoose.Schema.Types.Object, ref: 'articleSchema' }],//Stack is to store any data of the user
    advance:[{ type: mongoose.Schema.Types.Object, ref: 'articleSchema' }],//Stack is to store any data of the user
    basic: [{type:mongoose.Schema.Types.Object, ref: 'articleSchema' }],
});

var adminSchema = new mongoose.Schema({
    email: String,
    password: String
});

// var personSchema = new mongoose.Schema({
//     username: String,
//   uemail: String,
//   upassword: String,
// });

var stackSchema = new mongoose.Schema({
    dataName: String,
    dataValue: String
});

var advanceSchema = new mongoose.Schema({
    dataName: String,
    dataValue: String
});
var basicSchema = new mongoose.Schema({
    dataName: String,
    dataValue: String
});



var articleSchema = new mongoose.Schema({
    articleId: Number,
    title: String,
    keywords: [String],
    type: String,
    subject_category: [String],
    authors: [String],
    views: Number,
    downloads: Number,
    ratings: Number,
    submitted_on: String,
    published_on: String,
    updated_on: String,
    // comments: String,
    featured: Boolean,
    premium: Boolean,
    archived: Boolean,
    pdf_path: String,
    approved_by: String,
    payment_status: String,
    additionalFiles: '',
    content: [{ type: mongoose.Schema.Types.Object, ref: 'contentSchema' }]
});


var contentSchema = new mongoose.Schema({
    sno: Number,
    heading: String,
    head_content: String,
    illustrations: [{ type: mongoose.Schema.Types.Object, ref: 'illusSchema' }]
});

var illusSchema = new mongoose.Schema({
    title: String,
    path: String
});

var authorSchema = new mongoose.Schema({
    authorId: Number,
    title: String,
    fname: String,
    lname: String,
    designation: String,
    institute: String,
    email: String,
    address: String,
    country: String,
    postal_code: Number
});

var basicSchema= new mongoose.Schema({
    telephone:String,
    fax:String,
    address:String,
    city:String,
    zipcode:String,
    country:String,
    interest:String,
    preference:String
});

var advancedSchema= new mongoose.Schema({
    subjectCategory: String,
    Keywords:String,
    biography:String,
    academicpositions: String,
     reasearchinterests: String,
     otherinfo: String,
     scientistidea:String,
     supplementary:String,
     homepage:String,
     currentposition:String,
     placeofwork:String,
     recentpublications:String,
     peerreviewexperience:String,
    
     additionalFiles: '',
     content: [{ type: mongoose.Schema.Types.Object, ref: 'contentSchema' }]
});
var usernewpasswordSchema = new mongoose.Schema({
    upassword: String
});
var subCatSchema = new mongoose.Schema({
    cat_name: String
});

var articleTypeSchema = new mongoose.Schema({
    type: { type: mongoose.Schema.Types.Object, ref: 'typeSchema' }
    
});

var typeSchema = {
    name: String,
    headings: [String]
}

var Collections = {
    admin: mongoose.model('adminlogins',adminSchema),
    user: mongoose.model('users', userSchema.index({ username: 1 }, { unique: true }).index({ uemail: 1 }, { unique: true })),
    subjectCategories: mongoose.model('subject_categories', subCatSchema),
    articleTypes: mongoose.model('article_types', subCatSchema),
}
console.log("User Schema configured");
// console.log("Admin Schema Configured");
module.exports = Collections;