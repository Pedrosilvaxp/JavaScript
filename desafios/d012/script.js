function verificar() {
    const anterior = Number(prompt('Qual era o preço anterior do produto?'))
    const atual = Number(prompt('Qual é o preço atual?'))

    var h2 = document.querySelector('h2')
    h2.innerHTML = 'Analizando os valores informados'

    var p = document.getElementsByTagName('p')[1]

    var relacao = ''
    var variacao = ''
    if (anterior < atual) {
        relacao = atual - anterior
        variacao = relacao / anterior * 100

        // Resultado
        p.innerHTML = `O produto custava ${anterior.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} e agora custa ${atual.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.
        <br>Hoje o produto está mais caro.
        <br>O preço subiu ${relacao.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} em relação ao preço anterior.
        <br>Uma variação de ${variacao} % pra cima.`

    } else if (anterior > atual) {
        relacao = anterior - atual
        variacao = relacao / atual * 100

        p.innerHTML = `O produto custava ${anterior.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} e agora custa ${atual.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.
        <br>Hoje o produto está mais barato.
        <br>O preço abaixou ${relacao.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} em relação ao preço anterior
        <br>Uma variação de ${variacao} pra baixo.`
        
    } else if (anterior == atual) {
        p.innerHTML = `O produto custava ${anterior.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} e ainda custa ${atual.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.
        <br>Hoje o produto está o mesmo preço.`
    }
}