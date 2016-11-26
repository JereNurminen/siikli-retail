var express = require('express');
var router = express.Router();

/* GET users listing. */
router.all('/', function(req, res, next) {
  res.render('index', { title: 'PYLLYKAKKA' });
});

module.exports = router;
