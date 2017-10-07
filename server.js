var express = require('express');
var path = require('path');
var app = express();

app.get("/",function(req, res){res.sendFile(__dirname + "/assets/index.html")});
app.use('/assets', express.static(path.join(__dirname + "/assets")));
app.listen(3000, function(){
console.log('listening on port:' + 3000);

})
//=============Twitter data=================
var Twit = require('twit');
// console.log(Twit);
var config = require('./assets/new_npm/config');
var T = new Twit(config);

app.get('/tweets', function(req, res){
	
	// console.log("request: ", req.url);
	// console.log("response: " + res);
	
	T.get('search/tweets', { q: req.query.search, platforms: req.platforms, count: 50, dataType: "json"}, 
		function(err, data, response) {
	    console.log(data);
	  	res.json(data);
	 });
	
})
//==========================================


//==========================Amazon related==========================
var amazon = require('amazon-product-api');
var dotenv = require('dotenv').config();

require('dotenv/config');


var client = amazon.createClient({
  awsTag: process.env.AWS_TAG,
  awsId: process.env.AWS_ID,
  awsSecret: process.env.AWS_SECRET
});
console.log(process.env.AWS_TAG)
app.get('/amazon', function(req, res){
	client.itemSearch({
	  // director: 'Quentin Tarantino',
	  // actor: 'Samuel L. Jackson',
	  // searchIndex: 'DVD',
	  // audienceRating: 'R',
	  keywords: req.query.search,
	  responseGroup: 'ItemAttributes,Offers,Images'
	}, function(err, results, response) {
	  if (err) {
	    console.log(err);
	  } else {
	    console.log(results);  // products (Array of Object) 
	    console.log(response); // response (Array where the first element is an Object that contains Request, Item, etc.) 
	  	res.json(results);
	  }
	});
});
//==========================Amazon related==========================

//=============igdb related =========================

const igdb = require('igdb-api-node').default; 
var igdbAPIKey = 'ad750a15ddd755884be804b65c7e59a5'
const clientIGDB = igdb(igdbAPIKey);


app.get('/igdb', function(req, res){
	
	// console.log("Srivatsava request: ", req.query.search);
	//console.log(req.baseUrl);
	//console.log("response: " + res);
	clientIGDB.games({
	    fields:'*',
	    limit: 10,
	    offset: 15,
	    order: 'release_dates.date:desc',
	    search:req.query.search
	}).then(response =>{
		res.json(response);
		// console.log(response);
	}).catch(error => {
	    throw error;
	});
});

//===========================================