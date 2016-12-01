var express = require("express");
var router = express.Router();
var imgur = require("../services/imgur");
var path = require("path");
var History = require("../models/history");
 
router.get("/",function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});


router.get("/search/:query", function (req, res) {
  var query = req.params.query; 
  var offset = req.query.offset;
  var timestamp = Date.now();
    
  imgur.getImage(query, offset).then(function (ans) {
    var queryHistory = new History({ term: query, time: timestamp });
    queryHistory.save();
    res.json(ans);
  });
});


router.get("/latest", function (req, res) {
  History.find({}, 'term when -_id').sort('-when').limit(10).then(function (results) {
    res.status(200).json(results);
  });
});
 
module.exports = router;