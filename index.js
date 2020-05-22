var fs = require('fs');
var { promisify } = require('util');
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds*1000);
});


const doStuff = async () => {
  console.log('starting');
  await delay(1);
  console.log('waiting');
  await delay(2);
  try{
    await writeFile('file.txt', 'Sample File...');
  }catch(error){
    console.error(error);
  }
  
  //...
  await unlink('file.txt');
  beep();

  return Promise.resolve();
};

// doStuff()
//   .then(() => console.log("ALL DONE"));

const cont = async () => {
  await doStuff();
  console.log('ALL DONE');
};

cont();

// const doStuffSequentially = () => Promise.resolve()
//   .then(() => console.log('starting'))
//   .then(() => delay(1))
//   .then(() => 'waiting')
//   .then(console.log)
//   .then(() => delay(2))
//   .then(() => writeFile('file.txt', 'Sample File...'))
//   .then(beep)
//   .then(() => 'file.txt created')
//   .then(console.log)
//   .then(() => delay(3))
//   .then(() => unlink('file.txt'))
//   .then(beep)
//   .then(() => 'file.txt removed')
//   .then(console.log)
//   .catch(console.error);

// doStuffSequentially()
//   .then(() => console.log('again again!!!'))
//   .then(() => doStuffSequentially())
//   .then(() => console.log('enough already...'));
