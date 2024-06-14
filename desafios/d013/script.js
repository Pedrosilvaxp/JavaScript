function situacao() {
    const nome = String(prompt('Qual é o nome do aluno?'))
    // Nome capitalizado
    const nomes = nome.split(' ')
    const nomeCap = nomes.map(elem => {
        return elem.charAt(0).toUpperCase() + elem.slice(1)
    }).join(' ')

    // Notas
    const primeira = Number(prompt(`Primeira nota de ${nomeCap}:`))
    const segunda = Number(prompt(`Segunda nota de ${nomeCap}:`))
    const media = (primeira + segunda) / 2

    var h2 = document.querySelector('h2')
    h2.innerHTML = `Analisando a situação de ${nomeCap}`

    var p = document.getElementsByTagName('p')[1]
    p.innerHTML = `Com as notas ${primeira} e ${segunda}, a <strong>média é ${media}</strong>`
    
    if (media > 6) {
        p.innerHTML += `<br>Com média acima de 6,0, o aluno está <mark style="background-color: yellowgreen; color: green;">APROVADO</mark>`
    } else if (media > 3) {
        p.innerHTML += `<br>Com a média entre 3,0 e 6,0, o aluno está em <p style="display: inline ;color: #C3884B;">RECUPERAÇÃO</p>`
    } else {
        p.innerHTML = `<br>Com a média abaixo de 3,0, o aluno está <mark style="background-color: #E28782; ;color: red;">REPROVADO</mark>`
    }
}