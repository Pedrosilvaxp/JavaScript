const button = document.querySelector('input')
button.addEventListener('click', function() {
    const funcionario = String(prompt('Qual o nome do funcionário?'))

    const nome = funcionario.split(' ')
    const nomeCapitalizado = nome.map(ele => {
        return ele.charAt(0).toUpperCase() + ele.slice(1)
    }).join(' ')

    const salario = Number(prompt(`Qual o salário de ${nomeCapitalizado}`))
    const porcentagem = Number(prompt(`O salário de ${nomeCapitalizado} vai ser reajustado em qual porcentagem?`))
    const resPorcento = salario * porcentagem / 100
    const total = salario + resPorcento

    const h2 = document.querySelector('h2')
    const res = document.getElementsByTagName('p')[1]

    h2.innerText = `${nomeCapitalizado} recebeu um aumento salarial!`
    
    res.innerHTML = `O salário atual era <strong>${salario.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> 

    <br>Com um aumento de ${porcentagem}%, o salário vai aumentar <strong>${resPorcento.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> no próximo mês.

    <br>E a partir daí, ${nomeCapitalizado} vai passar a ganhar <strong>${total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`
})