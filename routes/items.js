var express = require('express');
var router = express.Router();
var Datastore = require('nedb');
var request = require('request');

var Datastore = require('nedb');
var db = new Datastore({filename : 'items'});
db.loadDatabase();

/* GET home page. */
router.get('/', function(req, res, next) {
    db.find({}, (err, docs) => {
        res.render('items', { title: 'Express', items: docs });
    })
});

router.post('/', (req, res) => {
    db.insert({
        name: req.body.name,
        price: req.body.price,
        count: req.body.count
    });
    res.end();
});

router.post('/remove', (req, res) => {
    db.remove({
        name: req.body.name,
    });
    res.end();
});

module.exports = router;