// Wait for the document to be fully loaded
$(document).ready(function() {
    // Function to fetch translation and update DIV#hello
    function fetchTranslation() {
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
    }

    // Event listener for the Translate button click
    $('#btn_translate').click(fetchTranslation);

    // Event listener for the Enter key press in INPUT#language_code
    $('#language_code').keypress(function(event) {
        // Check if the pressed key is Enter (key code 13)
        if (event.which === 13) {
            // Fetch translation when Enter key is pressed
            fetchTranslation();
        }
    });
});
