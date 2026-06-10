const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cartItems");

const totalPrice = document.getElementById("totalPrice");

let total = 0;

function displayCart() {

    container.innerHTML = "";

    total = 0;

    cartItems.forEach((item, index) => {

        total += item.price;

        container.innerHTML += `

        <div class="cart-item">

            <div>

                <h3>${item.name}</h3>

                <p>₹${item.price}</p>

            </div>

            <button onclick="removeItem(${index})">

                Remove

            </button>

        </div>

        `;

    });

    totalPrice.innerText = `Total : ₹${total}`;

}

function removeItem(index) {

    cartItems.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cartItems));

    displayCart();

}

document.getElementById("placeOrder").addEventListener("click", async () => {

    if (cartItems.length === 0) {

        alert("Cart is Empty");

        return;

    }

    const response = await fetch("https://shopeasy-dp44.onrender.com/api/orders", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

user: localStorage.getItem("user") || localStorage.getItem("userEmail") || "Guest",
            product: cartItems.map(item => item.name).join(", "),

            quantity: cartItems.length,

            total: total

        })

    });

    const data = await response.json();

    alert(data.message);

    localStorage.removeItem("cart");

    location.reload();

});

displayCart();