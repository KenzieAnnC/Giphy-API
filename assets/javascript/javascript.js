$(document).ready(function () {


var character = "";

var api_key = "&api_key=fU89AfoeG5J5kBkCYMh5BiL4ZqQGzBzW&limit=10";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + api_key;

var topics = 
    ["Ron Swanson", 
    "Jared Dunn",
    "Tina", 
    "Cartman", 
    "Blake Anderson", 
    "Jessica Jones"];

    $.ajax({
        url: queryURL,
        method: "GET"
      })

      console.log(queryURL);

});