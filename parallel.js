// A simple promise that resolves after a given time
const timeOut = (t) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Completed in ${t}`);
      }, t);
    });
  };

Promise.all([
    timeOut(2000), timeOut(5000)
]).then(console.log);


  