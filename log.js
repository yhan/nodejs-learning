var url = "https://my.org/log";

function log(message){
    console.log(message);
}

module.exports.notify = log;
