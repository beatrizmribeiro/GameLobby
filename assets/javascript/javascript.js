console.log('the bot is starting')

var Twit = require('twit'); 
var config = require('./config');
var T = new twit(config);

var params = {
  q: 'twitch',
  count: 5
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
console.log(data)

};



























//  var updatePage = function( resp ) {
//   $( '#target').html( resp.people[0].name );
// };

// var printError = function( req, status, err ) {
//   console.log( 'something went wrong', status, err );
// };
 
//  $.ajax({
//     url: "https://api-2445582011268.apicast.io/games",
//     headers: {
//       'user-key': 'cae1795c16e1b107290bd65fc600a1e1'
//     },
//     type: "get",
//     dataType: "json",
// })





// var ignAPIKEY = "d13abbdf045a48efadfe6380e367c2d8"
// //   var gameQueried = $('#gsearch-input').val();
//  $.ajax({
//     url: "https://newsapi.org/v1/" + "articles?source=ign&sortBy=top&apiKey=ignAPIKEY",
//     type: "get",
//      : "gamer"},
//     dataType: "jsonp"
//     //field_list : "user_review"
//   });



// function gamer(data) {
//   $(".container").empty();
//   console.log(data)
//  console.log(data.results[0].description)
//     $(".container").append("<p>" + data.results[0].description + "</p>")
  // screenurl = data.results[0].image.screen_url
  // $(".container").append("<img src =" + screenurl + ">"  )
  // $(".container").append(data.results[0].description)
  // $('#gsearch-input').val("")
   //}
