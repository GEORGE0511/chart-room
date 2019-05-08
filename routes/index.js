var express = require('express');
var mysql = require('./mysql.js');
var router = express.Router();
var url = require('url');
var email;
var dom;
/* GET home page. */
var req1,res1;

function getresult(dom){
    res1.send('{"status":"success","data":"'+dom+'"}');
}


  router.post('/login', function (req, res) {
    req1 = req;
    res1 = res;
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    if (username && password) {
      mysql.find(username,password,getresult)
    }
  });

  router.post('/forget', function (req, res) {
    req1 = req;
    res1 = res;
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    if (username && password) {
      mysql.change(username,password,getresult)
    }
  });

  router.post('/register', function (req, res) {
    req1 = req;
    res1 = res;
    var username = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;
    var useremail = req.body.useremail;
    console.log(username);
    console.log(password);
    console.log(useremail);
    if (username && password && repassword && useremail) {
      mysql.insert(username,useremail, password, getresult)
    }
  });

  router.get('/', function (req, res) {
    res.render('index', {title: '聊天室登陆界面'});
  });
router.get('/chart', function (req, res) {
  res.render('chart', {title: '聊天室聊天界面'});
});

router.get('/room', function (req, res) {
  res.render('room');
});


  module.exports = router;


