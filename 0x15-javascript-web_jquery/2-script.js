// Wait for the document to be fully loaded
$(document).ready(function() {
    // Attach click event listener to DIV#red_header
    $('#red_header').click(function() {
        // Update text color of <header> element to red
        $('header').css('color', '#FF0000');
    });
});

