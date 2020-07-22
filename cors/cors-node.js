var express = require('express');
var app = express();

app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin','http://localhost:63342');//添加这句话就可以正常返回数据了
    res.header('Access-Control-Allow-Credentials', true); // 允许加上cookie,如果加上这个，origin里面不允许为*
    next();
});

app.get('/', function (req,res) {
    res.send({'data':'this.is a root data'});
});

app.get('/test', function (req,res) {
    res.send({'test':'this.is a test data'});
});

app.listen(8888, function () {
   console.log('监听成功！')
});