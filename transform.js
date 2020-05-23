const {Transform} = require("stream");

class Replace extends Transform{
    constructor(char){
        super();
        this.replacement = char;
    }

    _transform(chunk, encoding, callback) {
        const replaced = chunk.toString().replace(/[a-z]|[A-Z]|[0-9]/g, this.replacement);
        this.push(replaced);

        callback();
    }

    _flush(callback){     
        this.push("No more written data to be consumed");
        callback();
    }
}

const replace = new Replace('x');
process.stdin
        .pipe(replace)
        .pipe(process.stdout);