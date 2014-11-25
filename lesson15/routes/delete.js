var express = require('express');
var fs = require('fs');
var router = express.Router();

router.post('/', function(req, res) {
// delete file here
    fs.unlink('../public/images/' + req.body.name, function(){
        res.sendStatus(200);
    })


});

module.exports = router;
