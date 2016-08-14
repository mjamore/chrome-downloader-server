var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/download', function (req, res) {
  res.send('Hello from download!');
});

app.post('/', function(req, res) {
	console.log(req);
	res.send('I copy');
});

app.listen(6969, function () {
  console.log('Example app listening on port 6969!');
});