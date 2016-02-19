var express = require ('express');
var fs = require ('fs');
var path = require ('path');
var app = express();
app.use(express.static(path.join(__dirname, './../client')));

app.get('/', function(req, res){
  res.send('hello world!');
});
app.get('/loggedin', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/index.html') );
});
app.listen(5432, function(){
  console.log('Listening on port 5432!');
});
