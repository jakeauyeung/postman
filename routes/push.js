var express = require('express');
var router = express.Router();

/* GET push page. */
router.get('/', function(req, res) {
  res.render('push', { title: 'Push' });
});

router.post('/', function(req, res) {
  
});

module.exports = router;
