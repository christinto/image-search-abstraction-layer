//var config = require("../../../sensitive_data/config");

var connection = "mongodb://jeff64:Locktight@ds113678.mlab.com:13678/image-search";
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

exports.db = mongoose.connect(connection);
