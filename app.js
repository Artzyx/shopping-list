/*global $*/
// state object used instead of the DOM to store the application state
var state = {
  items: []
};
// function that adds items to the state array
//console.log(state);
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

  $('.js-shopping-item-toggle').click(function(event) {
    $(this).closest('li').children('.js-shopping-item').toggleClass('shopping-item__checked');
  });
  
  // delete item on click
  
  
});

// create item and add to list
function addItem(state, itemName) {
  state.items.push({
    name: itemName,
    checked: false
  });
  $('.shopping-list').append(createItem(itemName));
}
// delete item
function deleteItem(state, itemName) {
   state.items.splice(itemName, 1);
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
// check and uncheck items on the list by clicking the "Check" button
//

// permanently remove items from the list
