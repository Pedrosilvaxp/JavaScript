function botao(chamada) {
    var botao = document.querySelector('input')
    var botaonum = ''

    switch(chamada) {
        case 1:
            botaonum = ('Botão 1')
            break
        case 2:
            botaonum = ('Botão 2')
            break
        case 3:
            botaonum = ('Botão 3')
            break
    }
    
    alert(`Você clicou no ${botaonum}`)
}