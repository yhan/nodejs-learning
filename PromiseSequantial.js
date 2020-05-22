
const delay = (ms) => new Promise(resolve => {
    setTimeout(() => resolve("Hello") /* Here resolve return "Hello"  */, ms);
});

Promise.resolve()
    .then(() => delay(2000))
    .then(console.log) /* That's why we can grab the returned "Hello" here */
    .then(() => console.log("end"))
    .catch(console.log);

