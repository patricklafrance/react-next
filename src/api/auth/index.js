const express = require("express");
const { users } = require("../database.js");
const { authenticatedRoute } = require("../authenticated-route");

const router = express.Router();

router.get("/signin", (req, res) => {
    const { username, password } = req.body;

    if (username && password) {
        const user = users.find(
            x => x.username === username && x.password === password
        );

        if (user) {
            req.session.id = user.id;
            req.session.role = user.role;

            res.sendStatus(200);
        }
    }

    res.sendStatus(401);
});

router.get("/signout", authenticatedRoute, (req, res) => {
    req.session = null;

    res.sendStatus(200);
});

module.exports = router;
