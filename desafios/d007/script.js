const cota = Number(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))

function cotacao() {
    const dinheiro = Number.parseFloat(prompt('Quantos R$ você tem na carteira?'))
    const conversao = Number(dinheiro / cota)

    const res = document.querySelector('div')
    res.innerHTML = `Com <strong>${dinheiro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> reais, você poderia comprar <strong>U${conversao.toLocaleString('en-US', {style:'currency', currency:'USD'})}</strong> dólares`
}