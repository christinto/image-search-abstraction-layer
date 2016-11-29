var express = require("express");
var router = express.Router();
var imgur = require("../services/imgur");
var path = require("path");
var History = require("../models/history");
 
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
 
router.get("/latest", function(req, res) {
    History.find({}, "term when -_id").sort("-when").limit(10).then(function (results) {
        res.json(results);
    });
});
 
router.get("/search/:q", function (req, res) {
    
    imgur.getImage(req.params.q, req.query.offset).then(function (ans) {
        new History({ term: req.params.q }).save();
        res.json(ans);
    });
});
 
module.exports = router;