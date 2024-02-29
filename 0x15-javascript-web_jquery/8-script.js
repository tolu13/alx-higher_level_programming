// Wait for the document to be fully loaded
$(document).ready(function() {
    // Make an HTTP GET request to fetch movie data
    $.ajax({
        url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
        type: 'GET',
        success: function(data) {
            // Iterate through each movie and append its title to UL#list_movies
            $.each(data.results, function(index, movie) {
                $('#list_movies').append('<li>' + movie.title + '</li>');
            });
        },
        error: function() {
            // Handle errors if any
            $('#list_movies').append('<li>Error fetching movie data</li>');
        }
    });
});

