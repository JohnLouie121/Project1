const products = [
    { name: "Laptop", price: 999, image: "https://via.placeholder.com/150" },
    { name: "Headphones", price: 199, image: "https://via.placeholder.com/150" },
    { name: "Smartphone", price: 699, image: "https://via.placeholder.com/150" },
    { name: "Smartwatch", price: 249, image: "https://via.placeholder.com/150" }
];

const cart = [];
const productList = document.getElementById("product-list");
const cartDisplay = document.getElementById("cart");

function displayProducts() {
    productList.innerHTML = "";
    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(index) {
    cart.push(products[index]);
    displayCart();
}

function displayCart() {
    cartDisplay.innerHTML = "<h2>Shopping Cart</h2>";
    if (cart.length === 0) {
        cartDisplay.innerHTML += "<p>Your cart is empty.</p>";
        return;
    }

    let total = 0;
    cart.forEach((item) => {
        total += item.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartDisplay.appendChild(cartItem);
    });

    const totalDisplay = document.createElement("div");
    totalDisplay.classList.add("total");
    totalDisplay.innerHTML = `Total: $${total.toFixed(2)}`;
    cartDisplay.appendChild(totalDisplay);
}

displayProducts();
