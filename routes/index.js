var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('*', function(req, res){
  res.render('error')
})

module.exports = router;
