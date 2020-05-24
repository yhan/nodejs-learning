const http = require("http");
const fs = require("fs");
const { promisify } = require("util");
const multiparty = require("multiparty");

const file = "./assets/powder-day.mp4";

const server = http.createServer((req, res) => {
    if (req.url === "/video") {
        respondVideo(req, res);
        return;
    }
    if (req.method === "POST") {

        //pipe to writable streams
        // cannot chain here: `Cannot pipe, not readable`
        // req.pipe(res);//response is writable not readable
        // req.pipe(process.stdout);
        // req.pipe(fs.createWriteStream("./assets/uploaded.data"));

        var form = new multiparty.Form();
        form.on("part", part => {
            part.pipe(fs.createWriteStream(`./assets/${part.filename}`))
                .on("close", () => {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end(`<h1>File ${part.filename} successfully uploaded</h1>`);
                });
        });
        form.parse(req);


        return;
    }
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <form enctype="multipart/form-data" method="POST" action="/">
                <input type="file" name="upload-file" />
                <button>Upload File</button>
            </form>
            `);
    }
});

async function respondVideo(req, res) {
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
}

server.listen(3000, () => {
    console.log("Listen on port 3000");
});
