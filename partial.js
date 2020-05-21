function add(x, y, z) {
    return x + y + z;
}

function partialApply(func, x){
    return function(m, l){
        return func(x, m, l);
    };
}

const applied = partialApply(add, 5);
const sum = applied(2, 6);

console.log(sum);