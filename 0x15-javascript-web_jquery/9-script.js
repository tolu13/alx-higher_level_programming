$(document).ready(function() {
    // Make an HTTP GET request to fetch translation data
    $.ajax({
        url: 'https://hellosalut.stefanbohacek.dev/?lang=fr',
        type: 'GET',
        success: function(data) {
            // Update the content of DIV#hello with the fetched translation
            $('#hello').text(data.hello);
        },
        error: function() {
            // Handle errors if any
            $('#hello').text('Error fetching translation');
        }
    });
});
