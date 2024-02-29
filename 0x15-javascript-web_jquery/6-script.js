// Wait for the document to be fully loaded
$(document).ready(function() {
    // Attach click event listener to DIV#update_header
    $('#update_header').click(function() {
        // Update text of <header> element to "New Header!!!"
        $('header').text('New Header!!!');
    });
});

