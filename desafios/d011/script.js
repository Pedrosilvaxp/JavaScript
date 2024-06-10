const button = document.querySelector('input')
button.addEventListener('click', function() {
    const ano = Number(prompt('Informe o ano que você quer verificar:'))

    var h2 = document.querySelector('h2')
    h2.innerText = `Analizando o ano de ${ano}...`

    var p = document.getElementsByTagName('p')[1]
    if (ano % 4 == 0 && ano % 100 !== 0 || ano % 400 == 0) {
        p.innerHTML = `O ano de ${ano} <mark style="background: yellowgreen; padding: 4px;">É BISSEXTO</mark> \u{2705}`
    } else {
        p.innerHTML = `O ano de ${ano} <mark style="background: red; padding: 4px;">NÃO É BISSEXTO</mark> \u{274C}`
    }
})