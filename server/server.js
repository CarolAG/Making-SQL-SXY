var express = require ('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world!');
});
app.get('/loggedin', function(req, res){
  res.sendFile('/../client/index.html');
});
app.listen(5432, function(){
  console.log('Listening on port 5432!');
});
