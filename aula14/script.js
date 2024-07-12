function contagem() {
    // Variables
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementsByTagName('input')[1].value)
    var n3 = Number(document.querySelector('#n3').value)
    var input = document.querySelector('input')
    var msg = document.getElementById('msg')
    var res = document.getElementById('res')

    // Conditions
    var passo = ''
    if (n3 == 0 || input.value == null) {
        window.alert('[ERRO] Preencha todas as caixas com números acima de zero')
    } else if (n1 <= n2) {
        // Operation
        msg.innerHTML = 'Contando:'
        while (n1 <= n2) {
            passo += `${n1} \u{1F446} `
            n1 += n3 - 1
            n1++
        }
        res.innerText = passo
    } else {
        // Operation 2
        msg.innerHTML = 'Contando:'
        while (n1 >= n2) {
            passo += `${n1}=> `
            n1 -= n3 - 1
            n1--
        }
        res.innerText = passo
    }
}