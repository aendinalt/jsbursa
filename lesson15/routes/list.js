var express = require('express');
var fs = require('fs');
var router = express.Router();


router.get('/', function(req, res) {
  var fileList = [];
  fs.readdir('../public/images', function(err, files){
    fileList = files.sort();
    res.send(fileList);
  });

});

module.exports = router;
