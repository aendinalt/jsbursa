var express = require('express');
var fs = require('fs');
var router = express.Router();

router.post('/', function(req, res) {
    console.log(req.files);
});

module.exports = router;
