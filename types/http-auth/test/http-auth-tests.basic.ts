import * as http from "http";
import * as auth from "http-auth";

const basic = auth.basic({
    realm: "Simon Area.",
    file: __dirname + "/../data/users.htpasswd", // gevorg:gpass, Sarah:testpass
});

const server = http.createServer();
const a = auth.digest({});
a.check();
// Creating new HTTP server.
http.createServer(
    basic.check((req, res) => {
        res.end(`Welcome to private area - ${req.user}!`);
    }),
).listen(1337, () => {
    // Log URL.
    console.log("Server running at http://127.0.0.1:1337/");
});
