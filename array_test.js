const _ = require('lodash');

const log = console.log;

// console.log( _.capitalize("hello world!") );

const arr = [1,2,3];

// const cube = _.map(arr, x => x*x*x);
// console.log(cube);

log(_.reduce(arr, (acc, curr) => acc+curr));

// const sum = _.reduce(arr, function(acc, curr) {
//     return acc + curr;
// });

// log("sum ", sum);

// log(_.every(arr, x => x > 0)); // ALL
//log(_.some(arr, x => x > 42 ));   // ANY

