// Wait for the document to be fully loaded
$(document).ready(function() {
    // Attach click event listener to DIV#red_header
    $('#red_header').click(function() {
        // Add 'red' class to <header> element
        $('header').addClass('red');
    });
});

