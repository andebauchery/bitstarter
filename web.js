var express = require('express');
var fs = require('fs');

var indexfile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var indexbuf = fs.readFileSync(indexfile);
  response.send(indexbuf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
