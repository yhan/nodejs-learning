const events = require("events");

// Is equivalent to: const {EventEmitter  } = require("events"); const emitter =  new EventEmitter();
const emitter = new events.EventEmitter();

emitter.on("customEvent", ({data, from} ) => {
    console.log(`${from} :  ${data}`);
});

// process.stdin should be an EventEmitter
// the .emit function is invoked by every standard input entry
process.stdin.on("data", data => {
    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("customEvent", {data: "Thank you.", from: "process"});
        process.exit();
    }
    else {
        emitter.emit("customEvent", {data: input, from: "terminal"});
    }
}); 