// var axios = require('axios');
// axios.defaults.withCredentials = true;   // 设置请求中允许带cookie
// axios.get('http://localhost:8888')
//     .then(data=>{
//         console.log(data)
//     }, err=> {
//         console.log(err)
//     });

var ajax = new XMLHttpRequest();
ajax.withCredentials = true;  // 设置请求中允许带cookie
ajax.open('GET', 'http://localhost:8888');
ajax.send();

ajax.onreadystatechange = function () {
    console.log(ajax);
    console.log(ajax.readyState);
};