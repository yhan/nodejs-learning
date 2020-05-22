const fs = require("fs");

// var files = fs.readdirSync("./")
// files.forEach(function(x){
//     console.log(x)
// })


// fs.readdir('./assets2', (err, files) => {
//     // Either err or files is null
//     // if(err)
//     //     console.log(err);
//     // else
//         console.log(files);
// }); //If no explicit error handling, error will be swollen*


const dir = "./assets2";
fs.exists(dir,  exists => {
    if(!exists)
        fs.mkdir(dir, {recursive: true}, (err) => {
            if (err) throw err;
        });
});