// var http= require('http');
// var server = http.createServer(function(req, res){
// res.writeHead(200);
// res.end(
//	console.log("grabbing video game news tweets");
//console.log(require);
var Twit = require('twit');
console.log(Twit);
var config = require('./config');
var T = new Twit(config);

T.get('search/tweets', { q: 'video games', count: 5 }, function(err, data, response) {
 //  console.log(data)
 });
// );

// })
// server.listen(3000);



// module.exports = {
//   consumer_key:         'oBxxLbLrCGPNDXpyy6LG5SzDE',
//   consumer_secret:      'wuTApBbJDczQ0XociMWXCQkppBUwzI83EcGMVegsHGHNklullF',

//   access_token:         '2569694336-KdXG5FpxQJRIyki0AM3ReMSDrfvKGabIkzaWeiN',
//   access_token_secret:  'raiR2434eQUHfqUFCG8zQCxir4zUpJZYlsXvIyr3vBIox',
//   timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
  
// }
 
// 
//  get the list of user id's that follow @tolga_tezel 
// 
// T.get('followers/ids', { screen_name: 'tolga_tezel' },  function (err, data, response) {
//   console.log(data)
// })
 

//var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]
 
// var stream = T.stream('statuses/filter', { locations: sanFrancisco })
 
// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })
 
// 
// filter the public stream by english tweets containing `#apple` 
// 
// var stream = T.stream('statuses/filter', { track: '#apple', language: 'en' })
 
// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })