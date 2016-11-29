var config = require("../../../sensitive_data/config");

var connection = "mongodb://" + config.db_host + "/" + config.db_name;
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
 
exports.db = mongoose.connect(connection);