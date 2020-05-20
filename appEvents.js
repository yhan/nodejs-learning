
const Logger = require("./log");
const logger = new Logger();

//register
logger.on("messageLogged", (msg) => {
    console.log("Message received ...", msg);
});

//invoke
logger.log("Hello world");