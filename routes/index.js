var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Index page, use /carts /items /users for dashboard');
});

module.exports = router;
