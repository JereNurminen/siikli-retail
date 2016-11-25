var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIIKLI SUPER MEGA SHOPPING LIST' });
});

module.exports = router;

function addItem (event) {
  if (event.which == 13 || event.keyCode == 13) {
    //code to execute here
    return false;
  }
  return true;
}