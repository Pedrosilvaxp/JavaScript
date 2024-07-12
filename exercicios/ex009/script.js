let contagem = 0
let total = document.querySelector('mark')

function clique() {
    contagem++
    total.innerText = contagem
}
function zerar() {
    contagem = 0
    total.innerText = 0
}