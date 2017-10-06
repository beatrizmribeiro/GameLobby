/*
 * @summary: This javascript file covers the functionality that creates User interface to display game related videos, news and tweets based on the query.
 *  
 *
 * @author :Srivastava Cheemakurthi,Brad Collins, Beatriz Ribeiro
 * @version: 1.0
 * 
 */


// Generic Signup Form function
function signUpFrm(heading, cancelButtonTxt, okButtonTxt) {

  var confirmModal = 
    $('<div class="modal fade">' +        
      '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
          '<div class="modal-header">' +
            '<a class="close" data-dismiss="modal" >&times;</a>' +
            '<h3>' + heading +'</h3>' +
          '</div>' +
          '<div class="modal-body">' +
              '<form role="form">' +
                  '<div class="form-group">' +
                    '<label for="name-input">Name:</label>' +
                    '<input class="form-control" id="name-input" type="text"/>' +
                    '<label for="email-input">Email:</label>' +
                    '<input class="form-control" id="email-input" type="email"/>' +
                    '<label for="comments-input">Your Comments:</label>' +
                    '<textarea class="form-control" id="comments-input" rows="5"></textarea>' +
                    // '<button class="btn btn-primary" id="commentBtn" type="submit" style="margin-right: 90px;" ;">Post your Comment</button>' +
                  '</div>' +
              '</form>' +
          '</div>' +
          '<div class="modal-footer">' +
             '<button type="button" class="btn btn-secondary" data-dismiss="modal">' + cancelButtonTxt + '</button>' +
             '<button type="button" class="btn btn-primary" id="saveBtn">' + okButtonTxt + '</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>');
    //  confirmModal.find(("#okButton").click(function(event){
    // //   callback();
     //  confirmModal.modal('hide');
     // }));
      confirmModal.modal('show');
      confirmModal.modal('hide');     
  };  
// END Signup Form function 



// creating a Panel with Footer and no Header
function createPanel(num, colsize, appendLocation){
  var pdefault = $('<div class=panel panel-default>');
  var pbody = $('<div class="panel-body">');
  pbody.attr('id', appendLocation + 'panelTab'+ num);
  pbody.addClass('fixed-panel');
  var pfooter = $('<div class="panel-footer">');
  pfooter.attr('id', 'pfooter'+ num);
  pdefault.append(pbody);
  pdefault.append(pfooter);
  
  var paneldiv = $('<div class=paneldiv>');
  paneldiv.addClass(colsize);
  // append the panel Default to the container-fluid
  paneldiv.append(pdefault);
  var pCommentBtn = $('<button class="btn btn-outline-success">')
  pCommentBtn.text('Comment');
  pCommentBtn.attr('id','pCommentBtn');
  pfooter.append(pCommentBtn);
  $('#'+appendLocation).append(paneldiv);

}


$(document).ready(function(){
  // creating the basic layout when the document started.
  // navHeadersFooters()
  layout();
  reset();
  signUpFrm("Sign up - Comment Form", "Cancel", "Save")
  $('#tab1').show();

  topNews();
  
  

});
function navHeadersFooters(){
  var dCFulid = $('<div class="container-fluid">') 
   var drow = $('<div class="row">')
      var nHeader = $('<nav class="navbar navbar-nav navbar-fixed-top">')
        var divContainer = $('<div class="container">'); //'<div class="container">' +
        var navHeader =$ ('<div class="navbar-header">') 
            var nbrand = $('<a class="navbar-brand" href="./"><img src="assets/images/GameLobby5.png" alt="Game Lobby"></a>')
          // '</div>')
        // Collect the nav links, forms, and other content for toggling
          var dNavbar = $('<div id="navbar" class="navbar-toggler navbar-toggler-center">')
            var nForm =$('<form class="form-inline navbar-right">')
              var nFormSel = $('<select class="form-control " id="selSource">')
                  var nFormSelOpt1 = $('<option class="source">igdb</option>')
                  var nFormSelOpt2 = $('<option class="source">twitchtv</option>')
                  var nFormSelOpt3 = $('<option class="source">gaintbomb</option>')
                  var nFormSelOpt4 = $('<option class="source">ign</option>')
                  var nFormSelOpt5 = $('<option class="source">twitter</option>')
              // '</select>')
              var nFormInput = $('<input class="form-control" id ="gsearch-input" type="text" placeholder="Search">')
              var nFormBtn = $('<button class="btn btn-outline-success" id ="gsearchBtn" type="submit" search id="gsearch-input">Search</button>')
            // '</form>')
            var nFormUL = $('<ul class="nav navbar-nav ">')
                var nFormLi1 = $('<li class="nav-item"><a class="nav-link" href="#">PC</a></li>')
                var nFormLi2 = $('<li class="nav-item"><a class="nav-link" href="#">PS4</a></li>')
                var nFormLi3 = $('<li class="nav-item"><a class="nav-link" href="#">Xbox One</a></li>')
                var nFormLi4 = $('<li class="dropdown">')
                    var nFormA = $('<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">more <span class="caret"></span></a>')
                    var nFormUL1 = $('<ul class="dropdown-menu" role="menu">')
                      var nFormLi5 = $('<li><a href="#">WII U</a></li>')
                      var nFormLi6 = $('<li><a href="#">PS3</a></li>')
                      var nFormLi7 = $('<li><a href="#">Xbox 360</a></li>')
                      var nFormLi8 = $('<li><a href="#">3DS</a></li>')
                      var nFormLi9 = $('<li><a href="#">GAMETECH</a></li>')
  dCFulid.append(drow);
  drow.append(nHeader);
  nHeader.append(divContainer);
  divContainer.append(navHeader);
  navHeader.append(nbrand);
  navHeader.append(dNavbar);
            dNavbar.append(nForm)
            nForm.append(nFormSel)
            nFormSel.append(nFormSelOpt1)
            nFormSel.append(nFormSelOpt2)
            nFormSel.append(nFormSelOpt3)
            nFormSel.append(nFormSelOpt4)
            nFormSel.append(nFormSelOpt5)
            nForm.append(nFormInput)
            nForm.append(nFormBtn)
              nFormUL.append(nFormLi1)
              nFormUL.append(nFormLi2)
              nFormUL.append(nFormLi3)
              nFormUL.append(nFormLi4)
              nFormUL.append(nFormUL1)          
                  nFormUL1.append(nFormLi5)
                  nFormUL1.append(nFormLi6)
                  nFormUL1.append(nFormLi7)
                  nFormUL1.append(nFormLi8)
                  nFormUL1.append(nFormLi9)    
  $(".mypage").append(dCFulid);
  var navfooter = $('<nav class="navbar navbar-nav navbar-fixed-bottom">');
  var divContainer = $('<div class="container">');
  var fComment = $('<p id="footer" class="navbar-text navbar-right">&#169; Copyright 2017 Srivatsava - Brad - Beatriz</p>')
  navfooter.append(divContainer);
  divContainer.append(fComment);
  $(".mypage").append(navfooter);
}

// creating the layout for displaying the Tabs.
function layout(){
  var tabNames = ['Top News','Twitch Video','SearchResults','Comments'];
  var navs = $('<ul class="nav nav-tabs nav-justified">');
  navs.attr('id', 'tabs');
  var displayDiv = $('<div id=displayDiv>');
  var navTabDiv = $('<div class=navTabDiv>');
  var tabcontent = $('<div class=tab-content>');

  for (var i = 0; i<tabNames.length;i++){
    var nextTab = $('#tabs li').length+1;
    // console.log (nextTab)
    // create the tab
    $('<li><a href="#tab'+ nextTab +'" data-toggle="tab">'+tabNames[i]+'</a></li>').appendTo(navs);
    // create the tab content
    $('<div class="tab-pane" id="tab'+ nextTab +'">' +  '</div>').appendTo(tabcontent); //tabNames[i] + 
    navTabDiv.append(navs);
    displayDiv.append(navTabDiv);
    displayDiv.append(tabcontent);

    $('.container-fluid').append(displayDiv);
  }
  

}
//When a tab is selected displaying the content.
$('#tabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(document).on("click",function(){
  var activeElement = $(this)[0].activeElement;
  if (activeElement.text=== 'Top News') {
    $('#tab1').show();
    $('#tab2').hide();
    $('#tab3').hide();
    $('#tab4').hide();
  }else if (activeElement.text=== 'Twitch Video') {
    $('#tab2').empty();
    $('#tab2').show();
    topVideos();
    $('#tab1').hide();
    $('#tab3').hide();
    $('#tab4').hide();
  }
  else if (activeElement.text=== 'SearchResults') {
    $('#tab3').show();
    $('#tab1').hide();
    $('#tab2').hide();
    $('#tab4').hide();
  }
  else if (activeElement.text=== 'Comments') {
    $('#tab4').show();
    $('#tab1').hide();
    $('#tab2').hide();
    $('#tab3').hide();
  }else if (activeElement.text=== 'PC') {
    iPlatformSearch("PC")
    $('#tab3').show();
    $('#tab1').hide();
    $('#tab2').hide();
    $('#tab4').hide();
  }else if (activeElement.text=== 'PS4') {
    // iPlatformSearch("PS4");
    amazonItemLookUP("zelda")
    $('#tab3').show();
    $('#tab1').hide();
    $('#tab2').hide();
    $('#tab4').hide();
  }else if (activeElement.text=== 'Xbox One') {
    iPlatformSearch("Xbox One");
    $('#tab3').show();
    $('#tab1').hide();
    $('#tab2').hide();
    $('#tab4').hide();
  }else if (activeElement.text=== 'WII U') {
    iPlatformSearch("WII U");
    $('#tab3').show();
    $('#tab1').hide();
    $('#tab2').hide();
    $('#tab4').hide();
  }else if (activeElement.text=== 'PS3') {
    iPlatformSearch("PS3");
    $('#tab3').show();
    $('#tab1').hide();
    $('#tab2').hide();
    $('#tab4').hide();
  }else if (activeElement.text=== 'Xbox 360') {
    iPlatformSearch("Xbox 360");
    $('#tab3').show();
    $('#tab1').hide();
    $('#tab2').hide();
    $('#tab4').hide();
  }else if (activeElement.text=== '3DS') {
    iPlatformSearch("3DS");
    $('#tab3').show();
    $('#tab1').hide();
    $('#tab2').hide();
    $('#tab4').hide();
  }else if (activeElement.text=== 'GAMETECH') {
    iPlatformSearch("GAMETECH");
    $('#tab3').show();
    $('#tab1').hide();
    $('#tab2').hide();
    $('#tab4').hide();
  }else{
    console.log('No active elements');
  } 

})
// function to search data from IGDB platforms
function iPlatformSearch(iElement){
  $.ajax({
    url: '/igdb',
    type: 'GET',
    data:{search: iElement},
    success: function(igdbData) {
      // console.log(igdbData);
      platformResults(igdbData);
    }
  });
}

function reset(){
  $('#tab1').empty();
  $('#tab2').empty();
  $('#tab3').empty();
  $('#tab4').empty();
}

// Search button click function retrieves data based on the selection.
$(document).on("click", "#gsearchBtn",function(event) {
  // don't refresh
  event.preventDefault();

  var gainbombAPIKEY = "e20f3cfa13744ea433f8249befe9e104dc710642"
  var gameQueried = $('#gsearch-input').val();
  var source = $("#selSource option:selected").val();
  // connecing to IGN to get articles based on the Query.
  if (source==="ign"){
    var ignApiKEY = "457859b89daf48f1bab20c292e4ba57d"
    var queryURL = "https://newsapi.org/v1/articles?source=ign&category=gaming&apiKey="+ ignApiKEY + "&sortBy=latest" //+ '&title=' + gameQueried 
    $.ajax({
        url: queryURL,
        method: 'GET'
      }).done(function(ignData) {
        console.log(ignData)
        // ignResults(ignData)
      });
  }
  // connecing to gaintbomb to get articles based on the Query.
  else if (source==="gaintbomb"){
    $.ajax({
      url: "http://api.giantbomb.com/search/",
      type: "get",
      data: {api_key : gainbombAPIKEY, query: gameQueried, resources : "game",  format : "jsonp", json_callback : "gamer" },
      dataType: "jsonp"
    });
  } // connecing to twitchtv to get articles based on the Query.
  else if (source==="twitchtv"){
    $.ajax({
    type: 'GET',
    Accept: 'application/vnd.twitchtv.v5+json',
    url: 'https://api.twitch.tv/kraken/search/streams?query=' + gameQueried,
    headers: {
      'Client-ID': 'ba9klm2l5l7x75tlpvk87qpnjv8pbx',
      'Accept': 'application/vnd.twitchtv.v5+json',
    },
    success: function(data) {
      twitchData(data);

   }
  });
  } // connecing to twitchtv to get articles based on the Query.
  else if (source==="igdb"){
     $.ajax({
        url: '/igdb',
        type: 'GET',
        data:{search: gameQueried},
        success: function(igdbData) {
          igdbResults(igdbData);
        }
      });
  }else if (source==="twitter"){
    $.ajax({
        url: '/tweets',
        type: 'GET',
        data:{search: gameQueried},
        success: function(twitterData) {
          twitterResults(twitterData);
        }
      });
  }
  else{
    console.log('search not working');
  }
   // end of the search button click function
}); 



//Gamer function callback for gaintbomb query
function gamer(data) {
  //search the results and find the resource_type = "video" then copy the embed_player and the high_url, low_url, hd_url urls.
  $("#tab3").empty();
  var resourceType = '';
  var results = data.results;
  var resultRow = $("<div class='row'>");
  var imageDiv = $("<div class='col-sm-3'>");
  var resultDiv = $("<div class='col-sm-9'>");
 // looking through the results and appending them to the panels.
  for (var i=0; i< results.length;i++){
    var panelNum = i + 1;
    createPanel(panelNum, 'col-sm-4', 'tab3');
    var newRow = resultRow.attr('id','row'+panelNum);
    // console.log(newRow)
  
      resourceType = results[i].resource_type;
    if (resourceType === "game") {
      var name = $("<p>").text("Name: " + results[i].name);
      var deck = $("<p class='paragraph'>").text("Description: " + results[i].deck);
      var releaseDate = $("<p>").text("ReleaseDate: " + results[i].original_release_date);
      var personImage = $("<img>");
      personImage.attr("src", results[i].image.icon_url);

    }else if (resourceType==="video"){
      var embedVideo = results[i].youtube_id;
      if (embedVideo != null){
        var embedVideoURL = 'https://www.youtube.com/embed/' + embedVideo;
        // console.log(embedVideoURL)
        var iFrame = $('<iframe data-cbsi-video width="300" height="300" src=' + embedVideoURL + ' frameborder="0" allowfullscreen></iframe>');
        var videoDiv = $('<div class=videos>');
        videoDiv.append(iFrame);
        $('#tab3' +'panelTab'+ panelNum).append(videoDiv);
      }
    }

    $('#tab3' +'panelTab'+ panelNum).append(personImage);
    $('#tab3' +'panelTab'+ panelNum).append(name);
    $('#tab3' +'panelTab'+ panelNum).append(deck);
    $('#tab3' +'panelTab'+ panelNum).append(releaseDate);
    }
    // console.log(data);
}


//  Writing the comment information into the database.
$(document).on("click","#pCommentBtn", function(event) {
// preventing auto refresh when button clicked.
  console.log($(this))
  event.preventDefault();
  $(".modal").modal('show');
  console.log($(this))
  console.log($(this)["0"].parentElement.parentElement.firstChild.children[4].text)
  
});

$(document).on("click","#saveBtn", function(event) {
// preventing auto refresh when button clicked.
  event.preventDefault();
  // $(".modal").modal('show');
  console.log("saveBtn");
  //saving the comments to the firebase database.
  // saveComment();

  $(".modal").modal('hide');
  
});

function saveComment(){
  // firebase comment database access configuration
  var config = {
    apiKey: "AIzaSyAf7Ye7jq1ZJiTiNyQj123zyB5sxN3P2M0",
    authDomain: "comments-e35cc.firebaseapp.com",
    databaseURL: "https://comments-e35cc.firebaseio.com",
    projectId: "comments-e35cc",
    storageBucket: "",
    messagingSenderId: "514530584313"
  };
    
  // firebase initialization section
  firebase.initializeApp(config);
  var database = firebase.database();

  var cName = $("#name-input").val().trim();
  var cEmail = $("#email-input").val().trim();
  var cMsg = $("#comments-input").val().trim();
  var cTime = moment().format('MMMM Do YYYY, h:mm:ss a');

  var newComments = {
      name: cName,
      email:cEmail,
      comments: cMsg,
      time: cTime
      //get the game information and upate here.
      //game: 
  };

  // console.log(newComments.name);
  // console.log(newComments.comments);
  // console.log(newComments.time);

  // Push the new Comment contents to the database.
  database.ref('/game/comments').push(newComments);

  // Clear the UI fields
  $("#name-input").val("");
  $("#email-input").val("");
  $("#comments-input").val("");
  // $("#time-input").val("");

  // END database write

}



// To display content from igdb Query results
function igdbResults(data){
  console.log(data);
  // console.log("Name: " + data.body["0"].name)
  // console.log("summary: " + data.body["0"].summary)
  // console.log("coverURL: " + data.body["0"].cover.url)
  // console.log("URL: " + data.body["0"].url)
  $('#tab3').empty();
  var item = data.body;
  for (var i=0; i< item.length;i++){
    var panelNum = i + 1;
    createPanel(panelNum, 'col-sm-4', 'tab3');
    var resultRow = $("<div class='row'>");
    var newRow = resultRow.attr('id','row'+panelNum);
    var name = item[i].name;
    var summary = item[i].summary;
    var Url = item[i].url;
    try {
      var coverUrl = item[i].cover.url;
      var imageUrl = $("<img class=img-responsive>");
      imageUrl.attr("src", coverUrl);
      var imgDiv = $('<div class=videos>');
      imgDiv.append(imageUrl);
      $('tab3' +'panelTab'+ panelNum).append(imgDiv);
    }
    catch(err){
      console.log(err);
    }
    var gameUrl = $('<a href=' + Url +' target="_blank">'+ "Visit GameURL" +'</a>' );  
    $('#tab3' +'panelTab'+ panelNum).append($("<p>").text("Name: " + name));
    $('#tab3' +'panelTab'+ panelNum).append($("<p>").text("Summary: " + summary));
    $('#tab3' +'panelTab'+ panelNum).append(gameUrl);
  }
  $('#tab3').show();
  $('#tab1').hide();
  $('#tab2').hide();
  $('#tab4').hide();
}

function platformResults(data){
  console.log(data);
  console.log("Id: " + data.body["0"].id);
  console.log("Name: " + data.body["0"].name);
  console.log("summary: " + data.body["0"].summary);
  console.log("Popularity: " + data.body["0"].popularity);
  console.log("URL: " + data.body["0"].url);
  $('#tab3').empty();
  var item = data.body;
  for (var i=0; i< item.length;i++){
    var panelNum = i + 1;
    createPanel(panelNum, 'col-sm-4', 'tab3');
    var resultRow = $("<div class='row'>");
    var newRow = resultRow.attr('id','row'+panelNum);
    var id = $("<p>").text("ID: " + item[i].id);
    var popularity = $("<p>").text("Popularity: " + item[i].popularity);
    var name = item[i].name;
    var summary = item[i].summary;
    var Url = item[i].url;
    try {
      var coverUrl = item[i].cover.url;
      console.log(Url);
      var imageUrl = $("<img class=img-responsive>");
      imageUrl.attr("src", coverUrl);
      var imgDiv = $('<div class=videos>');
      imgDiv.append(imageUrl);
      $('#tab3' +'panelTab'+ panelNum).append(imgDiv);
    }
    catch(err){
      console.log(err);
    }
    var gameUrl = $('<a href=' + Url +' target="_blank">'+ "Visit GameURL" +'</a>' );  
    $('#tab3' +'panelTab'+ panelNum).append(id);
    $('#tab3' +'panelTab'+ panelNum).append($("<p>").text("Name: " + name));
    $('#tab3' +'panelTab'+ panelNum).append($("<p>").text("Summary: " + summary));
    $('#tab3' +'panelTab'+ panelNum).append(gameUrl);
  }
  $('#tab3').show();
  $('#tab1').hide();
  $('#tab2').hide();
  $('#tab4').hide();
}

function twitterResults(data){
  console.log(data);
  console.log("Id: " + data.statuses["0"].id);
  console.log("Name: " + data.statuses["0"].name);
  console.log("summary: " + data.statuses["0"].summary);
  console.log("text: " + data.statuses["0"].text);
  console.log("URL: " + data.statuses["0"].source);
  $('#tab3').empty();
  var item = data.statuses;
  for (var i=0; i< item.length;i++){
    var panelNum = i + 1;
    createPanel(panelNum, 'col-sm-4', 'tab3');
    var resultRow = $("<div class='row'>");
    var newRow = resultRow.attr('id','row'+panelNum);
    var id = $("<p>").text("ID: " + item[i].id);
    var popularity = $("<p>").text("Popularity: " + item[i].popularity);
    var name = item[i].name;
    var summary = item[i].text;
    var Url = item[i].source;
    try {
      var coverUrl = item[i].user.profile_image_url;
      var imageUrl = $("<img class=img-responsive>");
      imageUrl.attr("src", coverUrl);
      var imgDiv = $('<div class=videos>');
      imgDiv.append(imageUrl);
      $('#tab3' +'panelTab'+ panelNum).append(imgDiv);
    }
    catch(err){
      console.log(err);
    }
    // var gameUrl = $('<a href=' + Url +' target="_blank">'+ "Visit GameURL" +'</a>' );  
    $('#tab3' +'panelTab'+ panelNum).append(id);
    $('#tab3' +'panelTab'+ panelNum).append($("<p>").text("Name: " + name));
    $('#tab3' +'panelTab'+ panelNum).append($("<p>").text("Summary: " + summary));
    $('#tab3' +'panelTab'+ panelNum).append(Url);
    

  }
  $('#tab3').show();
  $('#tab1').hide();
  $('#tab2').hide();
  $('#tab4').hide();
}

function twitchData(data){
    $('#tab2').empty();
    for (var i=0; i< data["streams"].length;i++){
      var panelNum = i + 1;
      createPanel(panelNum, 'col-sm-4', 'tab2');
      var resultRow = $("<div class='row'>");
      var newRow = resultRow.attr('id','row'+panelNum)
      var channel = data["streams"][i]["channel"]["name"];
      var channelPic = $('<img src=' + data["streams"][i].preview.medium + ' width="300" height="300">');
      channelPic.attr("id", "image");
      channelPic.attr("location", 'tab2' +'panelTab'+ panelNum)
      channelPic.attr("href","http://player.twitch.tv/?channel=" + channel )
      var videoDiv = $('<div class=videos>');
      videoDiv.append(channelPic);
      $('#tab2' +'panelTab'+ panelNum).append(videoDiv);
      $('#tab2' +'panelTab'+ panelNum).append($("<p>").text("Game: " + data["streams"][i]["channel"]["game"]));
      $('#tab2' +'panelTab'+ panelNum).append($("<p>").text("Description: " +data["streams"][i]["channel"]["description"]));
    }
    $('#tab2').show();
    $('#tab1').hide();
    $('#tab3').hide();
    $('#tab4').hide();
}

function topNews(){

    var ignURL = "https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=1f7f1d4b1e8149c5b11cd33e2829cff1";
    var polygonURL = "https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=1f7f1d4b1e8149c5b11cd33e2829cff1";
    var panelNum =0;
    $.ajax({
        url: ignURL,
        method: 'GET'
      }).done(function(ignData) {
          var item = ignData.articles;
          for (var i=0; i< item.length;i++){
            panelNum = i + 1;
            createPanel(panelNum, 'col-sm-4', 'tab1');
            var resultRow = $("<div class='row'>");
            var newRow = resultRow.attr('id','row'+panelNum);
            var author = $("<p>").text("Author: " + item[i].author);
            var published = $("<p>").text("Published: " + item[i].publishedAt);
            var title = item[i].title;
            var description = item[i].description;
            var Url = item[i].url;
            try {
              var coverUrl = item[i].urlToImage;
              var imageUrl = $("<img class=img-responsive>");
              imageUrl.attr("src", coverUrl);
              var imgDiv = $('<div class=videos>');
              imgDiv.append(imageUrl);
              $('#tab1' +'panelTab'+ panelNum).append(imgDiv);
            }
            catch(err){
              console.log(err);
            }
            $('#tab1' +'panelTab'+ panelNum).append(author);
            $('#tab1' +'panelTab'+ panelNum).append($("<p>").text("Description: " + description));
            $('#tab1' +'panelTab'+ panelNum).append(published);
            $('#tab1' +'panelTab'+ panelNum).append($("<p>").text("Title: " + title));
            var gameUrl = $('<a href=' + Url +' target="_blank">'+ "Visit Here" +'</a>' );
            $('#tab1' +'panelTab'+ panelNum).append(gameUrl);
          }
          $('#tab1').show();
          $('#tab2').hide();
          $('#tab3').hide();
          $('#tab4').hide();
        });

    $.ajax({
      url: polygonURL,
      method: 'GET'
    }).done(function(polygonData) {
        var item = polygonData.articles;
        for (var i=0; i< item.length;i++){
           panelNum = panelNum + 1;
          createPanel(panelNum, 'col-sm-4', 'tab1');
          var resultRow = $("<div class='row'>");
          var newRow = resultRow.attr('id','row'+panelNum);
          var author = $("<p>").text("Author: " + item[i].author);
          var published = $("<p>").text("Published: " + item[i].publishedAt);
          var title = item[i].title;
          var description = item[i].description;
          var Url = item[i].url;
          try {
            var coverUrl = item[i].urlToImage;
            var imageUrl = $("<img class=img-responsive>");
            imageUrl.attr("src", coverUrl);
            var imgDiv = $('<div class=videos>');
            imgDiv.append(imageUrl);
            $('#tab1' +'panelTab'+ panelNum).append(imgDiv);
          }
          catch(err){
            console.log(err);
          }
          $('#tab1' +'panelTab'+ panelNum).append(author);
          $('#tab1' +'panelTab'+ panelNum).append($("<p>").text("Description: " + description));
          $('#tab1' +'panelTab'+ panelNum).append(published);
          $('#tab1' +'panelTab'+ panelNum).append($("<p>").text("Title: " + title));
          var gameUrl = $('<a href=' + Url +' target="_blank">'+ "Visit Here" +'</a>' );
          $('#tab1' +'panelTab'+ panelNum).append(gameUrl);
        }
        $('#tab1').show();
        $('#tab2').hide();
        $('#tab3').hide();
        $('#tab4').hide();
      });

}

function topVideos(){

  $.ajax({
    type: 'GET',
    Accept: 'application/vnd.twitchtv.v5+json',
    url: 'https://api.twitch.tv/kraken/streams/?limit=25',
    headers: {
      'Client-ID': 'ba9klm2l5l7x75tlpvk87qpnjv8pbx',
      'Accept': 'application/vnd.twitchtv.v5+json',
    },
    success :function(data){
      console.log(data);
      $('#tab2').empty();
      for (var i=0; i< data["streams"].length;i++){
        var panelNum = i + 1;
        createPanel(panelNum, 'col-sm-4', 'tab2');
        var resultRow = $("<div class='row'>");
        var newRow = resultRow.attr('id','row'+panelNum);
        var channel = data["streams"][i]["channel"]["name"]; //.streams["0"].preview.medium
        
        var channelPic = $('<img src=' + data["streams"][i].preview.medium + ' width="300" height="300">');
        channelPic.attr("id", "image");
        //saving the image location as a location attribute to the image.
        channelPic.attr("location", 'tab2' +'panelTab'+ panelNum)
        // saving the channel video link as a href attribute to the image.
        channelPic.attr("href","http://player.twitch.tv/?channel=" + channel )
        var videoDiv = $('<div class=videos>');
        videoDiv.append(channelPic);
        $('#tab2' +'panelTab'+ panelNum).append(videoDiv);
        $('#tab2' +'panelTab'+ panelNum).append($("<p>").text("Game: " + data["streams"][i]["channel"]["game"]));
        $('#tab2' +'panelTab'+ panelNum).append($("<p>").text("Description: " +data["streams"][i]["channel"]["description"]));
      }
    }
  });
}

// Function to play video when the image is clicked in video's page.
$(document).on("click", "#image",function(event){
  event.preventDefault();

  var channel = $(this).attr("href");
  var videoLocation = $(this).attr("location");
  console.log(videoLocation)
  var iFrame = $('<iframe data-cbsi-video width="300" height="300" src=' + channel + ' frameborder="0" allowfullscreen></iframe>');
  $('#' + videoLocation).prepend(iFrame);
  $(this).detach();


})

function amazonItemLookUP(tag){
  $.ajax({
        url: '/amazon',
        type: 'GET',
         data:{search: tag},
        success: function(amazonData) {
          console.log(amazonData);
        }
  });
}



