const http = require("http");
const fs = require("fs");
const { promisify } = require("util");

const file = "./assets/powder-day.mp4";

const server = http.createServer(async (req, res) => {
    if (req.url.toString() === "/") {
        const sizePromise = promisify(fs.stat);
        const { size } = await sizePromise(file);
        const range = req.headers.range;

        if (range) {

            //bytes=0-
            const [s, e] = range.toString().replace("bytes=", "").split("-");
            const start = parseInt(s, 10);
            const end = e ? parseInt(e, 10) : size - 1;

            res.writeHead(206, {
                "Content-Range": `bytes ${start}-${end}/${size}`,
                "Accept-Range": "bytes",
                "Content-Type": "video/mp4",
                "Content-Length": end - start + 1
            }); // tell browser to use the correct module to treat video

            fs.createReadStream(file, { start, end })
                .pipe(res);

        } else {
            res.writeHead(200, {
                "Content-Type": "video/mp4",
                "Content-Length": size
            }); // tell browser to use the correct module to treat video

            fs.createReadStream(file)
                .pipe(res);
        }
    }
});

server.listen(3000, () => {
    console.log("Listen on port 3000");
});
