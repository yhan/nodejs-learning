const EventEmitter = require('events')
const emitter = new EventEmitter();

//register
emitter.on("messageReceived", function(){
    console.log("Message received");
})

//emit
emitter.emit("messageReceived")