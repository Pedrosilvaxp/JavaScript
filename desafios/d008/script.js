function desconto() {
    const produto = String(prompt('Qual produto você está comprando?'))
    const preco = Number(prompt(`Qual o preço de ${produto}?`))

    var h2 = document.querySelector('h2')
    h2.innerHTML = `Calculando o desconto de 10% para ${produto}`

    const des = preco * 10 / 100
    const total = preco - des
    var p = document.getElementById('res')

    p.innerHTML = `O preço original era <strong>${preco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> 
    <br>Você acaba de ganhar <strong>${des.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> de desconto (-10%)
    <br>No fim, você vai pagar <strong>${total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> no produto <strong>${produto}</strong>`
}