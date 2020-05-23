const {Readable} = require("stream");

array = [
    "Hello",
    "World",
    "How",
    "are",
    "you",
    "doing",
    "?"
];


class StreamFromArray extends Readable {

    constructor(array) {
        super({encoding: "utf-8"});
        this.array = array;
        this.index = 0;
    }

    _read() {

        if (this.index < this.array.length) {
            const chunk = this.array[this.index];
            this.push(chunk);
            this.index++;
        }
        else{
            this.push(null);
        }

    }
}

const stream = new StreamFromArray(array);
stream.on("data", d => console.log(d));
stream.on("end", d => console.log("END"));