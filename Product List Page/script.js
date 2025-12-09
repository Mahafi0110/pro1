// JSON PRODUCT DATA
const products = [
    { id: 1, title: "Laptop", price: 55000, category: "electronics", img: "images/laptop.avif" },
    { id: 2, title: "Headphones", price: 1500, category: "electronics", img: "images/headphones.jpg" },
    { id: 3, title: "T-Shirt", price: 500, category: "fashion", img: "images/Tshirt.jpg" },
    { id: 4, title: "Shoes", price: 2000, category: "fashion", img: "images/shoes.jpg" },
    { id: 5, title: "Rice Bag", price: 1200, category: "grocery", img: "images/rice.jpg" },
    { id: 6, title: "Vegetables", price: 250, category: "grocery", img: "images/vegetables.jpg" },
    { id: 7, title: "Phone", price: 30000, category: "electronics", img: "images/phone.jpg" },
    { id: 8, title: "Fruits", price: 250, category: "grocery", img: "images/fruits.jpg" },
    { id: 9, title: "Tops", price: 850, category: "fashion", img: "images/top.jpg" },
    { id: 10, title: "watch", price: 2250, category: "electronics", img: "images/watch.jpg" }
];

let cart = [];

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

// Display products
function showProducts(list) {
    grid.innerHTML = "";
    list.forEach(p => {
        grid.innerHTML += `
            <div class="card">
                <img src="${p.img}" alt="">
                <h3>${p.title}</h3>
                <p>₹${p.price}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}

showProducts(products);

// Add to cart
function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    alert(item.title + " added to cart!");
}

// Search + Filter
searchInput.addEventListener("keyup", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

function filterProducts() {
    const searchValue = searchInput.value.toLowerCase();
    const categoryValue = categoryFilter.value;

    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(searchValue) &&
        (categoryValue === "all" || p.category === categoryValue)
    );

    showProducts(filtered);
}
