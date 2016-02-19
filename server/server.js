var express = require ('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world!');
});

app.listen(5432, function(){
  console.log('Listening on port 5432!');
});
