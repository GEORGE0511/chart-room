var results= exports;
exports.insert = function(name,email,password,callback) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '95.179.194.184',//远程MySQL数据库的ip地址
        user: 'root',
        password: '19980511qiaozhi',
        database: 'chart_room',
        port: 3306
    });
    var flag=0;
    connection.connect();
    var userAddSql = 'INSERT INTO user(username,email,passwords) VALUES(?,?,?)';
    var userAddSql_Params = [name,email,password];
    connection.query(userAddSql,userAddSql_Params,function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            connection.end();
            callback(err.message)
        }
        else{
            console.log('--------------------------INSERT----------------------------');
            console.log('INSERT ID:',result.insertId);
            console.log('INSERT ID:',result);
            console.log('-----------------------------------------------------------------\n\n');
            results = '插入成功';
            connection.end();
            callback(results)
        }
    });
}

exports.change = function(name,password,callback) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '95.179.194.184',//远程MySQL数据库的ip地址
        user: 'root',
        password: '19980511qiaozhi',
        database: 'chart_room',
        port: 3306
    });

    connection.connect();
    var userModSql = 'UPDATE user SET passwords = ? WHERE username = ?';
    var userModSql_Params = [password,name];
    connection.query(userModSql, userModSql_Params, function (err, result) {
        if (err) {
            console.log(err.message);
            connection.end();
            callback(err.message)
        }
        else{
            console.log('--------------------------update----------------------------');
            console.log('update ID:',result);
            console.log('-----------------------------------------------------------------\n\n');
            results = '修改成功';
            connection.end();
            callback(results)
        }
    });
}




exports.find = function(name,password,callback) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '95.179.194.184',//远程MySQL数据库的ip地址
        user: 'root',
        password: '19980511qiaozhi',
        database: 'chart_room',
        port: 3306
    });
    connection.connect();
    var userAddSql = 'select * from user where username = ? and passwords = ?';
    var userAddSql2 = 'select * from user where username = ?';
    var userAddSql_Params = [name,password];
    connection.query(userAddSql2, userAddSql_Params, function (err, result) {
        if (!result){
            connection.end();
            console.log('您还没有注册账号！')
            callback('您还没有注册账号!')
        }
        else{
            connection.query(userAddSql, userAddSql_Params, function (err, result) {
                if (result.length==0){
                    connection.end();
                    console.log('密码不正确！')
                    callback('密码不正确!')
                }
                else if (result.length>0){
                    connection.end();
                    console.log('YES')
                    callback('YES')
                }
                else {
                    connection.end();
                    console.log('登陆失败')
                    callback('登陆失败')
                }
            });
        }
    });
}