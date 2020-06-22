a = [1, 2, 3, 4, 5]
let rotLeft = function (a, d) {
    for (let i = 0; i < d; i++) {
        a.unshift(a.pop());
    }
    return a
};
console.log(rotLeft(a, 24));