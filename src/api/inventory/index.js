const express = require("express");
const database = require("../database.js");
const { adminRoute } = require("../authenticated-route");

const router = express.Router();

// router.get("/products", adminRoute, (req, res) => {
router.get("/products", (req, res) => {
    res.json(database.products);
});

module.exports = router;
