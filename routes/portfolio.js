var express = require('express');
var router = express.Router();

//db가져오기

/* GET home page. */
router.get('/user/:userid', function(req, res, next) {
  res.render('portfolio', { userId:req.params.userid });
});

router.get('/enroll', function(req,res,next){
  res.render('register');
});

router.post('/enroll/save', function(req, res, next){
  
});

module.exports = router;
