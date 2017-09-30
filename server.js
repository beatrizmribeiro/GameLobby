var express = require('express');
var path = require('path');
var app = express();
//app.use(express.static(__dirname + "/index.html"));
app.get("/",function(req, res){res.sendFile(__dirname + "/index.html")});
app.listen(3000, function(){
console.log('listening on' + 3000);

});