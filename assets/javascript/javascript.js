$(document).ready(function () {


    // var api_key = "&api_key=fU89AfoeG5J5kBkCYMh5BiL4ZqQGzBzW&limit=10";
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + api_key;

    var topics =
        ["Ron Swanson",
            "Jared Dunn",
            "Tina Belcher",
            "Cartman",
            "Blake Anderson",
            "Jessica Jones"];


    // this loop iterates through all the topics an assigns the variable 'character' to the data-character value of each button

    function displayButtons() {

        for (var i = 0; i < topics.length; i++) {
            $('<button>', {
                text: topics[i],
                'data-character': topics[i],
                'data-still': 'fixed_width_still'
            })
                .appendTo('#buttons');

        }
    }

    function displayGifs() {

        // $(document).on('click', 'button', function () {

        var character = $(this).attr('data-character');
        var api_key = "&api_key=fU89AfoeG5J5kBkCYMh5BiL4ZqQGzBzW&limit=10";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + api_key;

        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.data;

                console.log(response.data);

                for (var i = 0; i < results.length; i++) {

                    if (results[i].rating !== 'r') {

                        var gifDiv = $("<div class= 'item'>");

                        var rating = results[i].rating;

                        var p = $('<p>').text("Rating: " + rating);

                        var characterImage = $('<img>');
                        characterImage.addClass('gif');

                        characterImage.attr('src', results[i].images.fixed_height_still.url);

                        characterImage.attr('data-still', results[i].images.fixed_height_still.url);

                        characterImage.attr('data-animate', results[i].images.fixed_height.url);

                        characterImage.attr('data-state', 'still');

                        console.log(characterImage);

                        gifDiv.append(p);
                        gifDiv.append(characterImage);

                        $('#gifs-appear-here').prepend(gifDiv);

                    }

                }

            });
    }

    function changeState() {
        $(document).on('click', '.gif', function () {

            var state = $(this).attr('data-state');
            console.log(state);

            if (state === 'still') {
                $(this).attr('src', $(this).attr('data-animate'));
                $(this).attr('data-state', 'animate');
            } else {
                $(this).attr('src', $(this).attr('data-still'));
                $(this).attr('data-state', 'still');
            }
        });
    }

    $(document).on('click', 'button', displayGifs);

    $(document).on('click', '.gif', changeState);

    // });

    displayButtons();

});