const http = require("http");
const fs = require("fs");
const {promisify} = require("util");

const file = "./assets/powder-day.mp4";

const server = http.createServer(async (req, res) =>{
    if(req.url.toString() === "/") {

        const sizePromise = promisify(fs.stat);
        const {size} = await sizePromise(file);
        res.writeHead(200, {
            "Content-Type": "video/mp4",
            "Content-Length": size
        }); // tell browser to use the correct module to treat video

        fs.createReadStream(file)
          .pipe(res);
    }
});

server.listen(3000, () => {
    console.log("Listen on port 3000");
});
