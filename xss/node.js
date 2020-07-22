var express = require('express');
var app =  express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var userInput = {};
app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'content-type');
    next();
});


app.get('/', function (req,res) {
    res.send({'test':'this is root data'})
});

app.get('/xss', function (req,res) {
    res.send(userInput.data)
});
// 反射型
app.post('/reflectSave', function (req,res) {
    console.log(req.body);
    res.send(req.body.data);
});

// 存储型
app.post('/save', function (req,res) {
    console.log(req.path);
    console.log(req.url);
    userInput = req.body;
    res.send({'save':'success'});
});

app.listen(8888, function () {
    console.log('8888 server run!');
})