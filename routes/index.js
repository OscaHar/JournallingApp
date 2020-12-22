var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Login page' });
  console.log('Its ALIVE - Page is loaded');
});
console.log('Its ALIVE - Application is alive');

module.exports = router;
