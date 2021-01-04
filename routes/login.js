var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function (req, res, next) {
  res.render('login', { title: 'Login page' });
  console.log('ITS ALIVE - Login page on load');
});

module.exports = router;
