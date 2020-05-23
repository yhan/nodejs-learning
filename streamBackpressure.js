const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('./assets/powder-day.mp4');
const writeStream = createWriteStream('./assets/copy.mp4');

readStream.on('data', (chunk) => {
    const result = writeStream.write(chunk);
    if(!result){
        //buffer full
        process.stdout.write("Buffer full, Pause read stream. \n");
        readStream.pause();
    }
});

readStream.on('error', (error) => {
    console.log('an error occurred', error.message);
});

readStream.on('end', () => {
    writeStream.end();
});

writeStream.on('close', () => {
    process.stdout.write('file copied\n');
});

writeStream.on('drain', () => {
    readStream.resume();
    process.stdout.write("ReadStream resumed \n");
});
