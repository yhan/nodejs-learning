const fs = require("fs");
const path = require("path");

const filePath = "./assets/myFile.txt";


const writeStream = fs.createWriteStream(filePath);

const readFile = fs.createReadStream(path.join("assets", "lorum-ipsum.md"));

readFile.pipe(writeStream);
// Is equivalent to: 
readFile.on("data", data => {
    writeStream.write(data);
});

// setTimeout(() => {
//     const read = fs.createReadStream(filePath, { encoding: "UTF-8" });
//     read.on("data", d => {
//         console.log(d);
//     });
// }, {ms: 4000});

