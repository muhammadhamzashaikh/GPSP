// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('show');
}

// Add to cart
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

// Load and display cart items
function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-items');
  const totalContainer = document.getElementById('total');

  if (!cartContainer || !totalContainer) return;

  cartContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <p>${item.name} - Rs. ${item.price} 
      <button onclick="removeItem(${index})">Remove</button></p>`;
    cartContainer.appendChild(div);
    total += item.price;
  });

  totalContainer.textContent = "Total: Rs. " + total;
}

// Remove item from cart
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

// Place order and clear cart
function placeOrder(event) {
  event.preventDefault();
  localStorage.removeItem('cart');
  alert("Your order has been placed successfully!");
  window.location.href = "index.html";
}

// Load cart on relevant pages
window.onload = function () {
  if (document.getElementById('cart-items')) {
    loadCart();
  }
};
