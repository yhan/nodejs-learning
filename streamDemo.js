const fs = require("fs");
const path = require("path");

const stream = fs.createReadStream(path.join("assets", "lorum-ipsum.md"), "UTF-8");

stream.on("end", () => {
    console.log("finished");
});

stream.on("data", data => {
    console.log(`I read ${data.length} chars`);
});

