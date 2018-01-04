var express = require('express');
var router = express.Router();

//db가져오기
var mysql      = require('mysql');
var db_config  = require('../config');
var connection = mysql.createConnection({
  host     : 'rwl.c6c0si2eyhwe.ap-northeast-2.rds.amazonaws.com',
  user     : db_config.db_info.user,
  password : db_config.db_info.password,
  port     : db_config.db_info.port,
  database : db_config.db_info.database
});


//image upload
var multer = require('multer');
var path = require('path');
var fs = require('fs');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
       filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 1024
    }
});


/* GET home page. */
router.get('/user/:userid', function(req, res, next) {
	var seller_id =req.params.userid;
	connection.query('SELECT * FROM artwork WHERE seller_id =?',seller_id, function(err, result) {
		if(err) {
			console.log(err);
			res.render('error');
		} 
		if(result) {
			console.log(result[0]);
			res.render('portfolio', { artworks:result, userId:req.params.userid });
		}
	});
  
});

router.get('/enroll', function(req,res,next){
	
  res.render('register');
});

router.post('/enroll/register', upload.array('file'),function(req, res, next){
	var photo = [];

    // var files = req.body.files;

    // for (var i = 0; i < files.length; i++) {
    //     photo.push(files[i].filename);

    // }
    var seller_id = '1';
    var artworkObj = {'seller_id':seller_id,
					'img_url':req.files[0].filename,
					'description':req.body.description,
					'title': req.body.title,
					'first_price':req.body.first_price,
					'last_price':req.body.first_price};
	
	connection.query('INSERT INTO artwork set ?', 
		artworkObj,
		function(err, result) {
			if(err) {
				console.log(err);
				res.render('error');
			} 
			if(result) {
				res.redirect('/portfolio/user/'+seller_id);
			}
		});
	
});
router.get('/detail/:artworkId', function(req,res,next){
connection.query('SELECT * FROM artwork WHERE id =?',req.params.artworkId, function(err, result) {
		if(err) {
			console.log(err);
			res.render('error');
		} 
		if(result) {
			console.log(result[0]);
			res.render('view', { artworks:result, userId:req.params.userid });
		}
	});
  
  
});
module.exports = router;
