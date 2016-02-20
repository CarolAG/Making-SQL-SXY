var express = require ('express');
var fs = require ('fs');
var app = express();



var path = require('path');
var bodyParser = require('body-parser');

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


//Default Login Post Page
app.post('/login', function(req, res,next){
  userController.verify(req,res,next);
  cookieController.setSSIDCookie(req,res,next);
  sessionController.isLoggedIn(req,res,next);
});
app.get('/loggedin', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/loggedin.html') );
});

app.listen(5432, function(){
  console.log('Listening on port 5432!');
});

//Signup Post page
app.get('/signup', userController.createUser);



//Authorized user page
app.get('/permission', function(req, res){
  res.send('hello world');
});
