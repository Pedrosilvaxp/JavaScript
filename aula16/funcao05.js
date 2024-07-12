function fatorial(n) {
    let fat = 1
    if (n == 1) {
        return '1'
    } else {
        for (let c = n; c > 1; c--) {
            fat *= c
        }
        return fat
    }
}

console.log(fatorial(5))