var express = require ('express');
var app = express();
var path = require('path');
var userController = require('./user/userController');


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + './../client/index.html'));
});


//Default Login Post Page
app.post('/login', function(req,res){
  userController.createUser(req,res);
});


//Signup Post page
app.get('/signup', function(req, res){
  res.sendFile(path.join(__dirname + './../client/signup.html'));
});


app.listen(1080, function(){
  console.log('Listening on port 3000!');
});
