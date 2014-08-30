var express = require('express');
var router = express.Router();
var ProgramProvider = require('./ProgramProvider.js').ProgramProvider;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
