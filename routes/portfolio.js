var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var db_config  = require('../config');
//db가져오기
var connection = mysql.createConnection({
    host     : 'rwl.c6c0si2eyhwe.ap-northeast-2.rds.amazonaws.com',
    user     : db_config.db_info.user,
    password : db_config.db_info.password,
    port     : db_config.db_info.port,
    database : db_config.db_info.database
});

/* GET home page. */
router.get('/user/:userid', function(req, res, next) {
  res.render('portfolio', { userId:req.params.userid });
});

router.get('/enroll', function(req,res,next){
  res.render('register');
});

router.post('/enroll/save', function(req, res, next){
  
});

router.get('/seller/:mytag', function(req, res, next){
    console.log('seller');
    connection.query('select * from artwork where tag like ? and status=? order by update_date desc LIMIT 9;',[req.param.mytag,''], function(err, rows, fields) {
        if (!err) {
          console.log(rows);
          //res.json({result:rows});
            res.render('portfolio', {result:rows});
        }
        else{
            res.redirect('/login/error');
        }
    });
});
module.exports = router;
