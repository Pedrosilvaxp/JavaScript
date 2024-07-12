let num = [2, 5, 1, 8, 4]

console.log(`Os valores são ${num}`)

/* for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} */

num.push(7)
num.sort()

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log(`Em que posição está o elemento 4? ${num.indexOf(4)}`)