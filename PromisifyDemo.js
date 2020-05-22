const fs = require("fs");
const path = require("path");
const {promisify} =  require("util");

// fs.writeFile(path.join("test", "here.data"), "File content",   err => {
//     if(err)
//         throw err;
//     console.log("write succeed");
// });

const wf = promisify(fs.writeFile);

wf(path.join("test", "here.data"), "Random data",  {encoding: "utf-8"})
.then(() => {
    console.log("Write completed");
})
.catch(reason => {
    console.log(reason);
});

