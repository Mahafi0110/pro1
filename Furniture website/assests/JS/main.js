// ✅ Add to Cart function
function addToCart(product) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // ✅ Check if product already exists
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
        // Increase quantity
        cartItems[existingProductIndex].quantity += product.quantity || 1;
    } else {
        // New product → default quantity is 1
        product.quantity = product.quantity || 1;
        cartItems.push(product);
    }

    alert("Product added to cart!");
}

// ✅ Call badge updater on page load
document.addEventListener("DOMContentLoaded", updateCartBadge);

// ✅ Update badge function
function updateCartBadge() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

    const badge = document.getElementById("cart-count");
    if (badge) {
        badge.textContent = totalItems;
    }
}
