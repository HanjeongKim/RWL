var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var db_config  = require('../config');
var connection = mysql.createConnection({
    host     : 'rwl.c6c0si2eyhwe.ap-northeast-2.rds.amazonaws.com',
    user     : db_config.db_info.user,
    password : db_config.db_info.password,
    port     : db_config.db_info.port,
    database : db_config.db_info.database
});
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('preference');
    res.render('preference',{ userId:'seller' });
});

router.post('/select', function(req, res, next){
    //그림1,2,3 url
    console.log('select');
    var tag="";
    console.log(req.body.tag);
    console.log(req.body.id);
    tag=req.body.tag;
    console.log('tag : '+tag);
    var mytag=tag.replace(/;/g, '%');
    mytag='%'+mytag;
    console.log(mytag);
    connection.query('update user set prefer=? where id=?',[tag,req.body.id], function(err, rows, fields) {
        if (!err) {
            console.log('user prefer insert');
            //res.json({result:'/portfolio/seller/'+req.body.id+'/'+mytag});
            res.json({result:'/portfolio/seller/'+tag});
            //res.render('portfolio', { userId:req.params.userid });

          //  res.redirect('/portfolio/seller/'+req.body.id+'/'+mytag);
        }
        else{
            res.redirect('/login/error');
        }
    });
});
// router.post('/select', function(req, res, next){
//     //그림1,2,3 url
//     console.log('select');
//     var tag="";
//     console.log(req.body.tag);
//     console.log(req.body.id);
//     tag=req.body.tag;
//     console.log('tag : '+tag);
//     var mytag=tag.replace(/;/g, '%');
//     mytag='%'+mytag+'%';
//     console.log(mytag);
//     connection.query('insert into user preferl? where id=?',[mytag,req.body.id], function(err, rows, fields) {
//         if (!err) {
//             console.log('user prefer insert');
//             res.redirect('/portfolio/seller/'+req.body.id+'/'+mytag);
//         }
//         else{
//             res.redirect('/login/error');
//         }
//     });
// });


module.exports = router;
