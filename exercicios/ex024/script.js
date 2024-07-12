function contar() {
    let res = document.getElementById('res')
    let con = 0
    for (let c = 10; c > 0; c--) {
        console.log(c)
        con += c
    }
    res.innerHTML = con
}