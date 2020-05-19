const http = require("http");

const server = http.createServer();
server.on("connection", socket => {
    console.log("new client connected");
});

const port = 3000;
server.listen(port);

console.log(`Start at port ${port}`);