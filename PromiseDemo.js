// const p = (new Promise((resolves) => setTimeout(resolves, 2000)))
// .then(console.log("End"));

// console.log("Where ? ");

const delay = seconds => new Promise(resolves => {
    setTimeout(resolves, seconds * 1000);
});  

delay(2).then(() => console.log("Finished"));

