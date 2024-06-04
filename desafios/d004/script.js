function comprar() {
    let produto = prompt('Digite o nome do produto:')
    
    if (produto.length == 0) {
        alert('Por que não vai comprar nada?')
    } else {
        let preco = Number(prompt(`Quanto custa esse ${produto} que você irá comprar?`))
        let pagar = Number(prompt('Qual valor que você deu para pagar?'))

        let troco = Number(pagar - preco)

        if (pagar > preco) {
            alert(`Você comprou ${produto.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} que custou R$ ${preco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.
Deu R$ ${pagar.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} em dinheiro e vai receber R$ ${troco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} de troco. Volte sempre!`)
        } else {
            alert(`Você comprou ${produto} que custou R$ ${preco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.
Você deu R$ ${pagar.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} em dinheiro e vai ficar devendo R$ ${troco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}. 
Pague oque deve!`)
        }
    }
}