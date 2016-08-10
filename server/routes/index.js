var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});



// Let this remain at the bottom
router.get('*', function(req, res, next){
  res.render('404');
})

module.exports = router;
