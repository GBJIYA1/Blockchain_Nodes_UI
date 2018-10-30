var express = require('express');
var fs=require("fs");
var app = express();

//方法1：通过express.static访问静态文件，这里访问的是ajax.html
// app.use(express.static("./"));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended:true
}));
app.post('/urlencoded', function(req, res){
    console.log(req.body);
    res.send(" post successfully!");
});


app.use(express.static('network'))

app.listen(3000, function() {   //监听http://127.0.0.1:3000端口
    console.log("server start");
});






console.log('Server running at http://127.0.0.1:3000/index.html');

