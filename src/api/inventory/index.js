const express = require("express");
const database = require("../database.js");
const { adminRoute } = require("../authenticated-route");

const router = express.Router();

// router.get("/products", adminRoute, (req, res) => {
router.get("/products", (req, res) => {
    res.json(database.products);
});

router.post("/products/remove", (req, res) => {
    const { id } = req.body;

    const index = database.products.findIndex(x => x.id === id);

    if (index !== -1) {
        database.products.splice(index, 1);

        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;
