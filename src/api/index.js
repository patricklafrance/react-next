/* eslint no-console: off */

const express = require("express");
const cookieSession = require("cookie-session");
const cors = require("cors");

const { config } = require("../shared/config");

const app = express();
app.use(cors({ origin: config.app.baseUrl, credentials: true }));
app.use(express.json());

app.set("trust proxy", 1); // trust first proxy

app.use(
    cookieSession({
        name: "session",
        secret: "my-app-is-super-secure-and-secret"
    })
);

app.use("/api", require("./router"));

const server = app.listen(config.api.port, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(server.address());
    console.log("Listening at http://%s:%s", host, port);
});
