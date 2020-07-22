var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // 解析 url 参数
    console.log(req.url);
    console.log(url.parse(req.url, true));
    var params = url.parse(req.url, true).query;
    console.log('params: ',params);
    // jsonpCallback 为前后端约定的字段，用于获取回调函数的名称
    res.end(params.jsonpCallback + "('This is JSONP Edwin.')");
}).listen(8888);