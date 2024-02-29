// Wait for the document to be fully loaded
$(document).ready(function() {
    // Add item
    $('#add_item').click(function() {
        $('ul.my_list').append('<li>Item</li>');
    });

    // Remove item
    $('#remove_item').click(function() {
        $('ul.my_list li:last-child').remove();
    });

    // Clear list
    $('#clear_list').click(function() {
        $('ul.my_list').empty();
    });
});

