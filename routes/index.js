var express = require('express');
var router = express.Router();
 
router.get('/', function(req, res) {
  res.send('Hello');
});
 
router.get('/latest', function(req, res) {
    
});
 
router.get('/search/:q', function(req, res) {
    
});
 
module.exports = router;