/*
 * @Author: your name
 * @Date: 2020-02-20 01:31:57
 * @LastEditTime: 2020-02-20 01:40:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \chart-room\routes\users.js
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
