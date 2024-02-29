// Wait for the document to be fully loaded
$(document).ready(function() {
    // Make an HTTP GET request to fetch character data
    $.ajax({
        url: 'https://swapi-api.alx-tools.com/api/people/5/?format=json',
        type: 'GET',
        success: function(data) {
            // Update the content of DIV#character with the fetched character name
            $('#character').text(data.name);
        },
        error: function() {
            // Handle errors if any
            $('#character').text('Error fetching character data');
        }
    });
});
