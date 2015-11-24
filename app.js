var express = require('express');
var path = require('path');
var Random = require('./modules/random.js');
var Convert = require('./modules/convert.js');
var Format = require('./modules/format.js');

var app = express();

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/static', function(requ, res, next) {
  res.sendFile('./static/styles.css');
});

app.get('/static', function(requ, res, next) {
  res.sendFile('./static/scripts.js');
});

app.get('/balance', function(req, res, next) {
  res.send(Format.func(Convert.func(Random.func(100, 1000000))));
});

var server = app.listen(3000, function() {
  var host = this.address().address;
  var port = this.address().port;
  console.log('Sever is listening at http://%s:%s', host, port);
});
