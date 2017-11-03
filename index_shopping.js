'use strict';
const shoppingList = $('.shopping-list');

// listens for 'add item' button to be submitted
// when event is triggered, input (shopping entry) is stored in variable
$(document).ready(function(){
  $('#js-shopping-list-form').on('submit', function(event){
    event.preventDefault();
    const newItem = $(this).find('input[name="shopping-list-entry"]').val();
    addItem(newItem);
  });
});

// appends newItem added to shopping list
function addItem(item) {
  shoppingList.append(itemTemplate(item)); //append always adds at end by default
}

// adds div/li/button/class for new shopping list entries
function itemTemplate(name) {
  return `      
  <li>
    <span class="shopping-item">${name}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
}

//is there a reason to make/use these functions?  would they be called again anywhere?
checkItem(); 
deleteItem();

// event listens for anything clicked in entire <ul> tag
// .closest loos up the DOM for the closest li
// .find looks down the DOM for the class specified (.shopping-item) 
// .toggleClass applies the css tied to the shopping-item__checked selector/class
function checkItem(){
$('ul').on('click', '.shopping-item-toggle', function(event){
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});
}

function deleteItem(){
  $('ul').on('click', '.shopping-item-delete', function(event){
    $(this).closest('li').remove('li');
  });
}

