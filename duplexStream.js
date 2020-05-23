const { createReadStream, createWriteStream } = require('fs');
const {PassThrough, Duplex } = require("stream");
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

class Delay extends Duplex {
    constructor(wait){
        super();
        this.wait = wait;
    }

    _write(chunk, encoding, callback){
        setTimeout(callback, this.wait);
        this.push(chunk);
    }

    _read(){
    }

   _final(){
       this.push(null);
   }
}


const delay = new Delay(20);

readStream
    .pipe(delay)
    .pipe(report)
    .pipe(writeStream);
