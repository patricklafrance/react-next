const express = require("express");
const { users } = require("../database.js");
const { authenticatedRoute } = require("../authenticated-route");

const router = express.Router();

router.get("/", authenticatedRoute, (req, res) => {
    const userId = req.session.userId;
    const user = users.find(x => x.id === userId);

    res.json({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        role: user.role
    });
});

module.exports = router;
