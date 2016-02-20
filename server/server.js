var express = require ('express');
var fs = require ('fs');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
<<<<<<< HEAD
var schema = require('./user/postgresSchema')
=======
var mongoose = require('mongoose');

//connect to DB
var mongoURI = 'mongodb://localhost/sqlsexy';
mongoose.connect(mongoURI);
>>>>>>> ecbbb4ce4b1f915e7999a3866621199cac27f4f8

app.use(express.static(path.join(__dirname, './../client')));

// order of process for user
// userController --> cookieController --> sessionController --> features
var userController = require('./user/userController');
var cookieController = require('./cookie/cookieController');
var sessionController = require('./session/sessionController');

// initial web-page
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + './../client/index.html'));
});

//adds body to the request which will store username input and password input
app.use(bodyParser.urlencoded({ extended: true }));
<<<<<<< HEAD
app.use(bodyParser.json())
=======

//Signup Requests
app.get('/signup', function(req,res){
  res.sendFile(path.join(__dirname + './../client/signup.html'));
});
app.post('/signup', function(req,res){
  userController.createUser(req,res);
  res.sendFile(path.join(__dirname + './../client/index.html'));
});
>>>>>>> ecbbb4ce4b1f915e7999a3866621199cac27f4f8

//Default Login Requests
app.post('/login', function(req, res){
<<<<<<< HEAD
  cookieController.setSSIDCookie(req,res);
  sessionController.isLoggedIn(req,res);
  userController.verify(req,res);
=======
  userController.verify(req,res);
  // cookieController.setSSIDCookie(req,res);
  // sessionController.isLoggedIn(req,res);
>>>>>>> ecbbb4ce4b1f915e7999a3866621199cac27f4f8
});


//Authorized user page
app.get('/permission', function(req, res){
  //add session and cookie checker before sending to app
  res.sendFile(path.join(__dirname + './../client/loggedin.html'));
});

// user logs out and has their session/cookies removed
app.get('/logout',function(req,res){
  //add session remover middleware
  res.sendFile(path.join(__dirname + './../client/index.html'));
});

app.post('/loggedin',function(req,res){
  console.log(req.body)
  schema(req,res)
  }
)
app.listen(3000, function(){
  console.log('Listening on port 3000!');
});
