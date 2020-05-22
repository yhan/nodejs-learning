const readline = require("readline");
const { promisify } = require("util");
const fs = require("fs");

const rl = readline.createInterface({input: process.stdin, output: process.stdout} );


const question = promisify(rl.question);

question("Hello, how are you? \n")
    .then(response => console.log("The response is: ", response)) ;


// rl.question("Question \n", an => {
//     console.log("The answerer is ", an);
//     rl.close();
// });

// const readFile = promisify(fs.readFile);
// readFile("questions.js", { encoding: "utf-8"})
//     .then(data => {
//         console.log(data);
//     });
