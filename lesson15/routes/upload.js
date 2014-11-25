var express = require('express');
var fs = require('fs');
var router = express.Router();

router.post('/', function(req, res) {
    req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype){

    });
});

module.exports = router;
