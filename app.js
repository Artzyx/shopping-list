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
    checkItem(state, this);
  });
  // delete item on click
  $(document).on('click', '.js-shopping-item-delete', function() {
    deleteItem(state, this);
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


// check item and update state
function checkItem(state, element) {
  $(element).closest('li').children('.js-shopping-item').toggleClass('shopping-item__checked');
  // find the item name
  var itemName = $(element).closest('li').children('.js-shopping-item').text();
  var index = state.items.findIndex(function(element) {
    return element.name === itemName;  
  });
  state.items[index].checked = !state.items[index].checked;
  // toggle checked
  
}
  

// find the index of item
// delete item from the state
function deleteItem(state, element) {
  var itemName = $(element).closest('li').children('.js-shopping-item').text();
  $(element).closest('li').remove();
  var index = state.items.findIndex(function(element) {
    return element.name === itemName;
  });
  state.items.splice(index, 1);
}

// Create item inside of the UL
function createItem(itemName) {
  return (
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
}
