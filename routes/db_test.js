var express = require('express');
var mysql      = require('mysql');
var db_config  = require('../config');
var router = express.Router();
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : db_config.db_info.user,
  password : db_config.db_info.password,
  port     : db_config.db_info.port,
  database : db_config.db_info.database
});

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * from users', function(err, rows, fields) {
    if (!err){
      console.log('The solution is: ', rows);
      res.render('test', { db : rows[0] });
    }

    else
      console.log('Error while performing Query.', err);
  });
});

module.exports = router;
