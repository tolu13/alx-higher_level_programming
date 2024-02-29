// Wait for the document to be fully loaded
$(document).ready(function() {
    // Attach click event listener to DIV#toggle_header
    $('#toggle_header').click(function() {
        // Toggle class of <header> element between red and green
        $('header').toggleClass('red green');
    });
});

