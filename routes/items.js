var express = require('express');
var router = express.Router();
var Datastore = require('nedb');
var db = new Datastore({ filename: 'items' });

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('items', { title: 'Express' });
});

module.exports = router;