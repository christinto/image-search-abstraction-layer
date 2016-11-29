if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

var path = require("path");
var db = require("./config/db");
var express = require("express");
var routes = require("./routes/index");

var app = express();

app.use("/", routes);

app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(process.env.PORT || 8080, function () {
  console.log("App listening on port 8080!");
});