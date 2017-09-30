var express = require('express');
var path = require('path');
var app = express();


var Twit = require('twit');
console.log(Twit);
var config = require('./assets/new_npm/config');
var T = new Twit(config);

T.get('search/tweets', { q: 'video games', count: 5 }, function(err, data, response) {
 //  console.log(data)
 });

app.get("/",function(req, res){res.sendFile(__dirname + "/assets/index.html")});
app.use('/assets', express.static(path.join(__dirname + "/assets")));
//app.get("/assets/css",function(req, res){res.sendFile(__dirname + "/style.css")});
 app.listen(3000, function(){
console.log('listening on' + 3000);

})