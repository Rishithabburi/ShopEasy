const express = require("express");

const router = express.Router();

let products = [
    {
        id: 1,
        name: "Wireless Mouse",
        price: 499
    },
    {
        id: 2,
        name: "Keyboard",
        price: 999
    }
];

// GET all products
router.get("/", (req, res) => {
    res.json(products);
});

// POST add product
router.post("/", (req, res) => {
    const { name, price, description } = req.body;

    const newProduct = {
        id: products.length + 1,
        name,
        price,
        description
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product Added Successfully",
        product: newProduct
    });
});

module.exports = router;