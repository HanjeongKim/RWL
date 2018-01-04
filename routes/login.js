var express = require('express');
var mysql      = require('mysql');
var db_config  = require('../config');
var router = express.Router();
var connection = mysql.createConnection({
  host     : 'rwl.c6c0si2eyhwe.ap-northeast-2.rds.amazonaws.com',
  user     : db_config.db_info.user,
  password : db_config.db_info.password,
  port     : db_config.db_info.port,
  database : db_config.db_info.database
});

router.post('/', function(req, res, next) {
  connection.query('SELECT * from user where position = "seller" and id ="'+req.body.id+'"', function(err, rows, fields) {
    if (!err){
      console.log('The solution is: ', rows);
      console.log(req.body.password);
      console.log(rows[0].password);
      if(req.body.password == rows[0].password){
          res.redirect('/portfolio/user/'+req.body.id);
      }
      else{
          res.redirect('/login/error');
      }
    }
    else{
      console.log('Error while performing Query.', err);
      res.redirect('/login/error');
    }
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { login: 'Login' });
});

router.get('/error', function(req, res, next) {
  res.render('err_login');
});

module.exports = router;
