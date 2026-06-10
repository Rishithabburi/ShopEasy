const API = "http://localhost:5000/api/products";

async function loadProducts() {
    try {
        const response = await fetch(API);
        const products = await response.json();

        const productContainer = document.querySelector(".products");

        productContainer.innerHTML = "";

        products.forEach(product => {

            productContainer.innerHTML += `

                <div class="card">

                    <h3>${product.name}</h3>

                    <p>₹${product.price}</p>

                    <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">

                        Add to Cart

                    </button>

                </div>

            `;

        });

    } catch (error) {

        console.log(error);

    }
}

function addToCart(id, name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        id,
        name,
        price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added to Cart");
}

loadProducts();