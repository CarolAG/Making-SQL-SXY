// var User = require('./userModel');
var path = require('path');
// var bcrypt = require('bcrypt');

var client = path.join(__dirname, '..', '..', 'client');

//store user name and password's input field in object
var userController = {};

userController.createUser = function(req, res){
  console.log(req);

  if(!req.body.username || !req.body.password){
    res.sendFile(path.join(__dirname + './../client/signup.html'), {error: "Must include username and password"});
  }


};

module.exports = userController;
