a = [1, 2, 3, 4, 5]
let rotLeft = function (a, d) {
    if (d) a.unshift(a.pop());
    return a;
}
console.log(rotLeft(a, 1));