var express = require('express');
var router = express.Router();
var Datastore = require('nedb');
var db = new Datastore({ filename: 'items' });



router.post('/', (req, res) => {
    
});

module.exports = router;