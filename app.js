var express = require("express");
var routes = require('./routes/index');

var app = express();

app.use('/', routes);

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!');
});