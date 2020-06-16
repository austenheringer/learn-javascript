let a = [1, 2, 3, 4, 5]
var rotLeft = function (a, b) {
    let i = 0
    while (i < b) {
        a.unshift(a.pop())
        i++
    }
    return a
};


