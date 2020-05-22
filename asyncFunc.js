const fs = require('fs');
const {promisify } = require('util');

const readdir = promisify(fs.readdir);

// fs.readdir(".", {}, (err, files) => {
//     console.log(files);
// });

async function start(){
    const files = await readdir(".");
    // if(error){
    //     console.error(error);
    // }  HOW TO HANDLE ERROR HERE ?

    console.log(files);
}

start();
