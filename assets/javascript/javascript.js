$(document).ready(function () {


    // var api_key = "&api_key=fU89AfoeG5J5kBkCYMh5BiL4ZqQGzBzW&limit=10";
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + api_key;

    var topics =
        ["Jared Dunn",
            "Ron Swanson",
            "Tina",
            "Cartman",
            "Blake Anderson",
            "Jessica Jones"];


    // this loop (is supposed to) iterate through all the topics an assign the variable character to the data-character value of each button

    for (var i = 0; i < topics.length; i++) {
        $('<button>', {
            text: topics[i],
            'data-character': topics[i]
        })
            .appendTo('#buttons');
            

        
    }
     
    


        $(document).on('click', 'button', function() {
            var character = $(this).attr('data-character');
            var api_key = "&api_key=fU89AfoeG5J5kBkCYMh5BiL4ZqQGzBzW&limit=10";
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + api_key;
            console.log(character);
            console.log(queryURL);

            $.ajax({
                url: queryURL,
                method: "GET"
            })
                .then(function (response) {
                    var results = response.data;

                    console.log(response.data);

                    for (var i = 0; i < results.length; i++) {

                        if (results[i].rating !== "r") {

                            var gifDiv = $("<div class= 'item'>");

                            var rating = results[i].rating;

                            var p = $('<p>');

                            var characterImage = $('<img>');
                            characterImage.attr('src', results[i].images.fixed_height.url);

                            gifDiv.append(p);
                            gifDiv.append(characterImage);

                            $("#gifs-appear-here").prepend(gifDiv);

                        }

                    }
                });

        });

    

});