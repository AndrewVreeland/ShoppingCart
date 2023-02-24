/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() { }


// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {


  // DONE: Find the table body

  let tableBody = document.querySelector('tbody');
  let tableRow = document.createElement('tr');
  let deleteLink = document.createElement('td');
  let quantity = document.createElement('td');
  let item = document.createElement('td');

  // DONE: Iterate over the items in the cart

  for (let i = 0; i < state.cart.items.length; i++) {
    tableRow = document.createElement('tr');
    deleteLink = document.createElement('td');
    quantity = document.createElement('td');
    item = document.createElement('td');
    
    tableBody.appendChild(tableRow);
    tableRow.appendChild(deleteLink);
    tableRow.appendChild(quantity);
    quantity.textContent = state.cart.items[i].quantity;
    tableRow.appendChild(item); 
    item.textContent = state.cart.items[i].product;
  }

  // DONE: Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
