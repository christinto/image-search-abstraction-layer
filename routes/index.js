var express = require('express');
var router = express.Router();
var imgur = require('../services/imgur');
 
router.get('/', function(req, res) {
  res.send('Hello');
});
 
router.get('/latest', function(req, res) {
    
});
 
router.get('/search/:q', function(req, res) {
    imgur.getImage(req.params.q, req.query.offset).then(ans => {
        res.json(ans);
});
 
module.exports = router;