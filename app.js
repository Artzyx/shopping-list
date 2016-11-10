/*global $*/
// state object used instead of the DOM to store the application state
var state = {
  items: []
};
// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// listen for form submission
$(document).ready(function() {
  $('#js-shopping-list-form button').click(function(event) {
    event.preventDefault();
    // grab text in form after submission
    var itemName = $('#shopping-list-entry').val();
    // clear the form after submission
    $("#js-shopping-list-form")[0].reset();
    addItem(state, itemName);
  });
  // check item on click
  $(document).on('click', '.js-shopping-item-toggle', function() {
    $(this).closest('li').children('.js-shopping-item').toggleClass('shopping-item__checked');
  });
  // delete item on click
   $(document).on('click', '.js-shopping-item-delete', function() {
    $(this).closest('li').remove();
  });
  
});

// create item and add to list
function addItem(state, itemName) {
  state.items.push({
    name: itemName,
    checked: false
  });
  $('.shopping-list').append(createItem(itemName));
}
// Create item inside of the 
function createItem(itemName) {
  var item = (
    '<li>' +
      '<span class="shopping-item js-shopping-item">' + itemName + '</span>' +
      '<div class="shopping-item-controls">' +
        '<button class="js-shopping-item-toggle">' +
          '<span class="button-label">check</span>' +
        '</button>' +
        '<button class="js-shopping-item-delete">' +
          '<span class="button-label">delete</span>' +
        '</button>' +
      '</div>' +
    '</li>'
  );
  return item;
}
