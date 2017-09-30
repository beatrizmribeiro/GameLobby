
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
//=======

$("#gsearchBtn").on("click", function(event) {
  console.log("btnClick gsearchBtn Function")
  // refresh
  event.preventDefault();

  var gainbombAPIKEY = "e20f3cfa13744ea433f8249befe9e104dc710642"
  var gameQueried = $('#gsearch-input').val();
  var source = $("#selSource option:selected").val();
    //"crash bandicoot"

  if (source==="ign"){
    var ignApiKEY = "457859b89daf48f1bab20c292e4ba57d"
    var queryURL = "https://newsapi.org/v1/articles?source=ign&apiKey="+ ignApiKEY + "&sortBy=top&category=gaming" 
    $.ajax({
        url: queryURL,
        method: 'GET'
      }).done(function(response) {
        console.log(response);
      });
  }
  else if (source==="gaintbomb"){
    $.ajax({
      url: "http://api.giantbomb.com/search/",
      type: "get",
      data: {api_key : gainbombAPIKEY, query: gameQueried , format : "jsonp", json_callback : "gamer" },
      dataType: "jsonp"
      //field_list : "name, image",
    });
  }else if (source==="twitchtv"){
    $.ajax({
      Accept: 'application/vnd.twitchtv.v5+json',
      type: 'GET',
      url: 'https://api.twitch.tv/kraken/search/streams?query= '+ gameQueried,
      headers: { 'Client-ID': 'ba9klm2l5l7x75tlpvk87qpnjv8pbx'},
      success: function(twitchData) {
        console.log(twitchData);
      }

    });
  }else if (source==="igdb"){
    $.ajax({
        url: 'https://api-2445582011268.apicast.io/games',
        type: 'GET',
        
       // xhrFields: {withCredentials:true},
        headers: {
          "user-key": 'ad750a15ddd755884be804b65c7e59a5',
          "Accept": 'application/json'
        },
        //'user-key': 'cae1795c16e1b107290bd65fc600a1e1', //Brad user key.
        // fields: '*',
        // limit: 10,
        // offset: 15,
        // search: gameQueried,
        // Access-Control-Allow-Origin: "*",

        success: function(igdbData) {
          console.log(igdbData);
        }
      });
  }else{
    console.log('search not working');
  }
    
   // end of the search button click function
  
  

}); // search button function ending.
function gamer(data) {
  $(".crystalImgBody").empty();
  console.log(data)

  var results = data.results;
  
  for (i=0; i< results.length;i++){
    var resultRow = $("<div class='row'>");
    var imageDiv = $("<div class='col-sm-3'>");
    var resultDiv = $("<div class='col-sm-9'>");


    //var gifDiv = $("<div class='item'>");
    var rating = results[i].rating;
    // var p = $("<p>").text("Rating: " + rating);
    var name = $("<p>").text("Name: " + results[i].name);
    var deck = $("<p class='paragraph'>").text("Description: " + results[i].deck);
    var releaseDate = $("<p>").text("ReleaseDate: " + results[i].original_release_date);
    var weburl = results[i].api_detail_url;
    var personImage = $("<img>");
    personImage.attr("src", results[i].image.icon_url);
    var mainUrl = $("<a href=" + weburl + " target=_blank>").text(weburl);
   
    imageDiv.append(personImage);
    resultDiv.append(name);
    resultDiv.append(deck);
    resultDiv.append(releaseDate);
    // resultDiv.append(p);
    resultDiv.append(mainUrl);

    resultRow.append(imageDiv)
    resultRow.append(resultDiv)
    //$(".crystalImgBody").append(gifDiv);
    // $(".crystalImgBody").append(resultRow);
    $(".crystalImgBody").append(resultRow);          
  }

  infoDialog("Game Search Results", "", "CLOSE")
 // console.log(data.results[0].description)
  // console.log(data.results[0].name)
  // $(".crystalImgBody").append("<h1>" + data.results[0].name + "</h1>")
  // screenurl = data.results[0].image.screen_url
  // $(".crystalImgBody").append("<img src =" + screenurl + ">"  )
  // $(".crystalImgBody").append(data.results[0].description)
  // $('#gsearch-input').val("")
  }



$(document).ready(function(){
 
  addTab("News", "#tabs", ".tab-content");
  addTab("Videos", "#tabs", ".tab-content");
  addTab("Popularity","#tabs", ".tab-content");
  addTab("TwitterNews","#miscTabs", ".misc-tab-content");
  addTab("OtherNews","#miscTabs", ".misc-tab-content");
  // var bounce = new Bounce();
  // bounce.rotate({
  // from: 0, to: 90
  // });
  // bounce.applyTo($(".navbar-brand"));
})


// function gamerUI(){
//   // Creating needed Panels for the UI.
// //  createPanel('Crystals-Collector', 'crystalGameDescription','col-sm-12')
//   createPanel('Crystal-Images', 'crystalImgBody','col-sm-12')
// }


// function createPanel(headType, bodyType, colType){
//   //creating a Panel with three parameters
//   //1st parameter : Panel Identification class
//   //2nd Parameter : Panel body identification class for updating the values.
//   //3rd parameter giving the panel column width.
//   var container = $(".container-fluid");    
//   var column = $("<div class =" + colType + ">");
//   var panel = $("<div class='panel panel\-default'>");
//   var panelHeader = $("<div class='panel\-heading'>");
//   var panelBody = $("<div class='panel\-body'>");
//   panelHeader.addClass(headType);
//   panelBody.addClass(bodyType);
//   panelHeader.addClass('text-center');
//  // panelBody.addClass('text-center');

//     //container.append(colsm12);
//     container.append(column);
//     column.append(panel);
//     panel.append(panelHeader);
//     panel.append(panelBody);
//     panelHeader.append ("<h3 class='panel\-title'>" + headType + "</h3>")
//     panelBody.text ('');
// }

  /* Generic Confirm func */
  function confirm(heading, question, cancelButtonTxt, okButtonTxt, callback) {

    var confirmModal = 
      $('<div class="modal fade">' +        
          '<div class="modal-dialog" role="document">' +
          '<div class="modal-content">' +
          '<div class="modal-header">' +
            '<a class="close" data-dismiss="modal" >&times;</a>' +
            '<h3>' + heading +'</h3>' +
          '</div>' +

          '<div class="modal-body">' +
            '<p>' + question + '</p>' +
          '</div>' +

          '<div class="modal-footer">' +
             '<button type="button" class="btn btn-secondary" data-dismiss="modal">' + cancelButtonTxt + 
             '</button>' +
             '<button type="button" class="btn btn-primary">' + okButtonTxt +
             '</button>' +
          '</div>' +
          '</div>' +
          '</div>' +
        '</div>');

    confirmModal.find('#okButton').click(function(event) {
      callback();
      confirmModal.modal('hide');
    }); 
    console.log(confirmModal);
     confirmModal.modal('show');    
  };  
/* END Generic Confirm func */

$('#lgmodal').on("click", function(){
  console.log('lgmodal dialog')
  confirm("Delete all ?", "Do you want to delete all files? ", "No", "Yes", update )
})


 /* Generic Confirm func */
  function infoDialog(heading, message, cancelButtonTxt) {

    var confirmModal = 
      $('<div class="modal fade">' +        
          '<div class="modal-dialog" role="document">' +
          '<div class="modal-content">' +
          '<div class="modal-header">' +
            '<a class="close" data-dismiss="modal" >&times;</a>' +
            '<h3>' + heading +'</h3>' +
          '</div>' +

          '<div class="modal-body">' +
              message +
          '</div>' +

          '<div class="modal-footer">' +
             '<button type="button" class="btn btn-secondary" data-dismiss="modal">' + cancelButtonTxt + 
             '</button>' +
           '</div>' +
          '</div>' +
          '</div>' +
        '</div>');

    confirmModal.find('#okButton').click(function(event) {
      confirmModal.modal('hide');
    }); 
    console.log(confirmModal);
     confirmModal.modal('show');    
  };  


var $modal = $('.modal');
  // Show loader & then get content when modal is shown
$modal.on('show.bs.modal', function(e) {
  var paragraphs = $(e.relatedTarget).data('paragraphs');
  $(this)
    .addClass('modal-scrollfix')
    .find('.modal-body')
    .html('loading...')
    .load(gamer, function() {
      // Use Bootstrap's built-in function to fix scrolling (to no avail)
      // $modal
      //  .removeClass('modal-scrollfix')
      //   .modal('handleUpdate');
    });
  });

$(document).on("click","#news", function(event) {
  console.log("btnClick gsearchBtn Function")
  // refresh
 event.preventDefault();

  // var gainbombAPIKEY = "e20f3cfa13744ea433f8249befe9e104dc710642"
  // var gameQueried = $('#gsearch-input').val();

  //   //"crash bandicoot"

  // $.ajax({
  //   url: "http://api.giantbomb.com/search/",
  //   type: "get",
  //   data: {api_key : gainbombAPIKEY, query: gameQueried , format : "jsonp", json_callback : "gamer" },
  //   dataType: "jsonp"
  //   //field_list : "name, image",
  // });

  var ignApiKEY = "457859b89daf48f1bab20c292e4ba57d"
  var queryURL = "https://newsapi.org/v1/articles?source=ign&apiKey="+ ignApiKEY + "&sortBy=top&category=gaming" 
  $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });

  // var ignApiKEY = "457859b89daf48f1bab20c292e4ba57d"
  // var queryURL = "https://newsapi.org/v1/sources?language=en&apiKey="+ ignApiKEY + "&sortBy=top&category=gaming" 
  // $.ajax({
  //     url: queryURL,
  //     method: 'GET'
  //   }).done(function(response) {
  //     console.log(response);
  //   });

  
}); // News menu function ending.
// Videos page refreshed after clicking on Videos link.
$(document).on("click","#videos", function(event) {
  console.log("videos link clicked")
  // refresh
  event.preventDefault();

  var gainbombAPIKEY = "e20f3cfa13744ea433f8249befe9e104dc710642"
  var gameQueried = 'minecraft';//$('#gsearch-input').val(); // modify this code to search all the popular game videos details.

  $.ajax({
    Accept: 'application/vnd.twitchtv.v5+json',
     type: 'GET',
     url: 'https://api.twitch.tv/kraken/search/streams?query= '+ gameQueried,
     headers: {
       'Client-ID': 'ba9klm2l5l7x75tlpvk87qpnjv8pbx'
    }, success: function(twitchData) {
     console.log(twitchData);
    }
///streams
  });

}); // Videos link function ending.

//==========================Amazon related==========================
// var amazon = require('amazon-product-api');
// var client = amazon.createClient({
//   awsId: "AKIAJ75V5QTLBHDM7MIA",  
//   awsSecret: "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",
//   awsTag: "csrivatsava-20"
// });
// client.itemSearch({
//   director: 'Quentin Tarantino',
//   actor: 'Samuel L. Jackson',
//   searchIndex: 'DVD',
//   audienceRating: 'R',
//   responseGroup: 'ItemAttributes,Offers,Images'
// }, function(err, results, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(results);  // products (Array of Object) 
//     console.log(response); // response (Array where the first element is an Object that contains Request, Item, etc.) 
//   }
// });

// client.itemLookup({
//   idType: 'UPC',
//   itemId: '635753490879',
//   responseGroup: 'ItemAttributes,Offers,Images'
// }, function(err, results, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(results);
//   }
// });
//==========================Amazon related==========================
//===============

$('#tabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

//adding a tab function
function addTab(tabName,tablocation,tabcontent){
  var nextTab = $('#tabs li').length+1;
  // create the tab
    $('<li><a href="#tab'+ nextTab +'" data-toggle="tab">'+tabName+'</a></li>').appendTo(tablocation);
    // create the tab content
    $('<div class="tab-pane" id="tab'+ nextTab +'">' + '</div>').appendTo(tabcontent);
    
    // make the new tab active
    //$('#tabs a:first').tab('show');
}

//gamer callback function used for displaying the videos and news
function gamer(data) {
  console.log(data.results[0].name)
  var desc = data.results[0].description;
  var name = data.results[0].name;
  //search the results and find the resource_type = "video" then copy the embed_player and the high_url, low_url, hd_url urls.

  // addTab("News", desc);
  // addTab("Videos", name);
  // addTab("Popularity", desc);

  var resourceType = '';
  var results = data.results;
  var resultRow = $("<div class='row'>");
    var imageDiv = $("<div class='col-sm-3'>");
    var resultDiv = $("<div class='col-sm-9'>");
 
  for (i=0; i< results.length;i++){
      resourceType = results[i].resource_type;
      if (resourceType === "game") {
        // var rating = results[i].rating;
        // var p = $("<p>").text("Rating: " + rating);
        var name = $("<p>").text("Name: " + results[i].name);
        var deck = $("<p class='paragraph'>").text("Description: " + results[i].deck);
        var releaseDate = $("<p>").text("ReleaseDate: " + results[i].original_release_date);
        var weburl = results[i].api_detail_url;
        var personImage = $("<img>");
        personImage.attr("src", results[i].image.icon_url);
        var mainUrl = $("<a href=" + weburl + " target=_blank>").text(weburl);
        
    }
    else if (resourceType==="video"){

      var embedVideo = results[i].youtube_id;
      var iFrame = $('<iframe data-cbsi-video width="300" height="300" src=https://www.youtube.com/embed/' + embedVideo + ' frameborder="0" allowfullscreen></iframe>');
      var videoDiv = $('<div class=videos>');
      videoDiv.append(iFrame);
      $('#tab2').append(videoDiv);
    }
  
      imageDiv.append(personImage);
      resultDiv.append(name);
      resultDiv.append(deck);
      resultDiv.append(releaseDate);
      // resultDiv.append(p);
      resultDiv.append(mainUrl);

      resultRow.append(imageDiv)
      resultRow.append(resultDiv)
      //$(".crystalImgBody").append(gifDiv);
      // $(".crystalImgBody").append(resultRow);
      $("#tab1").append(resultRow);          

  }


    console.log(data);
}
//======

