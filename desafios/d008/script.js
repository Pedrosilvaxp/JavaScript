function desconto() {
    const produto = String(prompt('Qual produto você está comprando?'))
    const preco = Number(prompt(`Qual o preço de ${produto}?`))

    var h2 = document.querySelector('h2')
    h2.innerHTML = `Calculando o desconto de 10% para ${produto}`

    const des = preco * 10 / 100
    const total = preco - des
    var p = document.getElementById('res')

    p.innerHTML = `O preço original era ${preco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} 
    <br>Você acaba de ganhar ${des.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} de desconto (-10%)
    <br>No fim, você vai pagar ${total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} no produto ${produto}`
}