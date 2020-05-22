//Port current process's stdin to `Questions` app
// And port  `Questions` app back to the current process

const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

process.stdin.pipe(questionApp.stdin);

questionApp.stdout.on("data", data => {
  console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
  console.log(`questionApp process exited`);
});
