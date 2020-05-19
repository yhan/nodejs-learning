
import EventEmitter from "events";

class Logger extends EventEmitter{
    log(message){
        this.emit("messageLogged", message);
    }
}

export default Logger;
