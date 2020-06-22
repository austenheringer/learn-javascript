a = [1, 2, 3, 4, 5]
b = a.slice();
let rotLeft = function (b, d) {
    for (let i = 0; i < d; i++) {
        b.unshift(b.pop());
    }
    return b
};
console.log(rotLeft(b, 1));
console.log(a);