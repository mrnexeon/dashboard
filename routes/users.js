var express = require('express');
var router = express.Router();
var Datastore = require('nedb');
var db = new Datastore({ filename: 'users' });

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('users', { title: 'Express' });
});

module.exports = router;
