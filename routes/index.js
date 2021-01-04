var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Login page' });
  console.log('ITS ALIVE - On page load');
});
console.log('ITS ALIVE - On app start');

module.exports = router;
