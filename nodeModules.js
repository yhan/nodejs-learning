const readline = require("readline");
const util = require("util");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How old are you?", answer => {
    util.log(answer);
    process.exit();
});