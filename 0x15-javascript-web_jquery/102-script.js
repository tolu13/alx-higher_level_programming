// Wait for the document to be fully loaded
$(document).ready(function() {
    // Event listener for the Translate button click
    $('#btn_translate').click(function() {
        // Get the language code entered by the user
        const languageCode = $('#language_code').val();

        // Make an HTTP GET request to fetch translation data
        $.ajax({
            url: 'https://www.fourtonfish.com/hellosalut/hello/',
            type: 'GET',
            dataType: 'json',
            data: { lang: languageCode },
            success: function(response) {
                // Update the content of DIV#hello with the fetched translation
                $('#hello').text(response.hello);
            },
            error: function() {
                // Handle errors if any
                $('#hello').text('Error fetching translation');
            }
        });
    });
});

