// add to cart functionality page 1
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
    saveCart();
    updateBadge();
    alert(`${name} added to cart`);
  }

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function updateBadge() {
    document.getElementById('cart-badge').innerText = cart.reduce((a, b) => a + b.quantity, 0);
  }

  updateBadge(); // update on load


  