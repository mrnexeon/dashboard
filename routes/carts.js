var express = require('express');
var router = express.Router();
var Datastore = require('nedb');
var db = new Datastore({ filename: 'carts' });

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('carts', { title: 'Express' });
});

module.exports = router;