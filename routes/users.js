var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET cool route */
router.get('/cool', function(req, res) {
  res.render('cool');
});

module.exports = router;
