const { createReadStream, createWriteStream } = require('fs');
const {PassThrough} = require("stream");
const logUpdate = require('log-update');

const report = new PassThrough();

const readStream = createReadStream('./assets/powder-day.mp4');
const writeStream = createWriteStream('./assets/copy.mp4');



var size = 0;
report.on("data", chunk => {
    size += chunk.length;
    // console.log(size);
    logUpdate(size);
});


readStream
    .pipe(report)
    .pipe(writeStream);
