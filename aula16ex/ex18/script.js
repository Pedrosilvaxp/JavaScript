let num = document.querySelector('numero')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(l, n) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value)) {

    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
}