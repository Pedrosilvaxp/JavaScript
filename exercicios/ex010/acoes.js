function acoes(chamada) {
    let msg = document.querySelector('section#saida')
    let num = 0

    switch(chamada) {
        case 1:
            num = 1
            break
        case 2:
            num = 2
            break
        case 3:
            num = 3
            break
        case 4:
            num = 4
            break
    }

    msg.innerHTML = `<h2>Clicou no botão ${num}</h2>`
}