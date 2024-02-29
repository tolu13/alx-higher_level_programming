// Wait for the document to be fully loaded
$(document).ready(function() {
    // Attach click event listener to DIV#add_item
    $('#add_item').click(function() {
        // Create a new <li> element
        const newItem = $('<li>').text('Item');
        // Append the new <li> element to UL.my_list
        $('ul.my_list').append(newItem);
    });
});
