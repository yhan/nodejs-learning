function randomResolve(name) {
    return new Promise(resolve => setTimeout(() => {
      console.log(name);
      resolve();
    }, 100 * name));
  }
  
  Promise.all([ 
      randomResolve(6),
      randomResolve(3),
      randomResolve(4),
      randomResolve(1)
  ])
  .then(function(){
      console.log("All done!");
  });

//   Promise.race([ 
//     randomResolve(6),
//     randomResolve(3),
//     randomResolve(4),
//     randomResolve(1)
// ])
// .then(function(){
//     console.log("One of them done!");
// });