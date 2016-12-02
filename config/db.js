//var config = require("../../../sensitive_data/config");

var connection = "mongodb://" + process.env.DB_HOST + "/" + process.env.DB_NAME;
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

exports.db = mongoose.connect(connection);
