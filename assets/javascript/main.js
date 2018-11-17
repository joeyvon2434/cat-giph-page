$(document).ready(function () {

    const APIkey = 'tpOBhMb9bMKdBzmRRjzV11nmEBK126qW';
    let imageExists = false;
    let clickCounter = 0;

    //listens for click to add a cat and calls the api to add a cat giph
    $(this).on("click", ".giph-adder", function () {

        if (!imageExists) {
            let newDiv = $("<img>");
            newDiv.attr("src", "assets/images/loadin-gif.gif");
            newDiv.attr("alt", "This didn't work");
            newDiv.addClass("giph");
            newDiv.addClass("giph-image");
            $("#giph-box").append(newDiv);
            imageExists = true;
        } else {
            console.log("Make some new code");
            $(".giph").attr("src", "assets/images/loadin-gif.gif");
        }

        clickCounter++;
        console.log(clickCounter);

        let category = $(this).val();

        let queryURL = "https://api.giphy.com/v1/gifs/random?tag=" + category + "&api_key=" + APIkey

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {


            console.log("Make some new code");
            $(".giph").attr("src", response.data.image_original_url);


            if (clickCounter >= 25) {
                let newHeader = $("<h3 id='warning-message'>");
                newHeader.text("Wow... you really like this! That's awesome, but be careful you don't turn into a cat lady ;-)");
                $('#giph-box').prepend(newHeader);
            }
        });

    });//end on click to add a cat giph

}); //end document ready function