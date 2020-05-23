const fs = require("fs");

const wr = fs.createWriteStream("./assets/pipe.txt");
process.stdin.pipe(wr);