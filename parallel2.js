function Promise1() {
    return new Promise(function (resolve, reject) {
        process.nextTick(() => {
            for (let i = 0; i < 10; i++) {
                console.log("Done Err!");
            }
            resolve(true);
        });
    });
}

function Promise2() {
    return new Promise(function (resolve, reject) {
        process.nextTick(() => {
            for (let i = 0; i < 10; i++) {
                console.log("Done True!");
            }
            resolve(true);
        });
    });
}

Promise.all([
    Promise1(),
    Promise2()
])
    .then(function () {
        console.log("All Done!");
    });