function add(x, y) {
    return x+ y;
}

function partialApply(func, n){
    return function(m){
        return func(n, m);
    }
}

const fiveApplied = partialApply(add, 5);
const sum = fiveApplied(2);

console.log(sum);