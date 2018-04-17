$(document).ready(function () {


    var api_key = "&api_key=fU89AfoeG5J5kBkCYMh5BiL4ZqQGzBzW&limit=10";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + api_key;

    var topics =
        ["Ron Swanson",
            "Jared Dunn",
            "Tina",
            "Cartman",
            "Blake Anderson",
            "Jessica Jones"];




    for (var i = 0; i < topics.length; i++) {
        $('<button/>', {
            text: topics[i],
            'data-character': topics[i]
        })
        // $('<button data-character>' + topics[i] + '</button>');

        .appendTo('#buttons');
        var characater = $('button').attr('data-character');
        // console.log('this ' + characater);
    }




    $(document).on('click', 'button', function () {

        // var character = $(this).attr('data-character');
        var characater = $(this).attr('data-character');
        console.log(this);
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function(response) {
                var results = response.data;

                console.log(response.data);

                // console.log(response);
                for (var i = 0; i < results.length; i++) {



                    var gifDiv = $("<div class = 'item>");

                    var rating = results[i].rating;

                    var p = $('<p>');

                    var characterImage = $('<img>');
                    characterImage.attr('src', results[i].images.fixed_height.url);

                    gifDiv.append(p);
                    gifDiv.append(chracterImage);

                    $("gifs-appear-here").prepend(gifDiv);



                }
            });

    });

    // console.log(queryURL);

});