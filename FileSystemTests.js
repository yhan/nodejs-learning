const fs = require("fs")

// var files = fs.readdirSync("./")
// files.forEach(function(x){
//     console.log(x)
// })


fs.readdir('./assets2', (err, files) => {
    // Either err or files is null
    // if(err)
    //     console.log(err);
    // else
        console.log(files);
}); //If no explicit error handling, error will be swollen