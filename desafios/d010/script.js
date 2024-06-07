const button = document.querySelector('input')
button.addEventListener('click', function() {
    const valorA = Number(prompt('Qual é o valor de a:'))
    const valorB = Number(prompt('Qual é o valor de b:'))
    const valorC = Number(prompt('Qual é o valor de c:'))
    const calculo = valorB * valorB - 4 * valorA * valorC

    var h2 = document.querySelector('h2')
    var res = document.getElementsByTagName('p')[1]

    h2.innerHTML = 'Resolvendo Bhaskara'
    res.innerHTML = `A equação atual é <strong>${valorA}x² + ${valorB}x + ${valorC} = 0</strong>
    <br>O cálculo realizado será <strong>Δ = ${valorB}² - 4 . ${valorA} . ${valorC}</strong>
    <br>O valor calculado foi <strong>Δ = ${calculo}</strong>`
})