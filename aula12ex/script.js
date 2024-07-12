function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    var minu = date.getMinutes()

    var msg2 = document.getElementById(`msg2`)

    msg.innerHTML = `<p>Agora são ${hora}:${minu}` 

    if (hora >= 0 && hora <= 12) {
        img.src = 'ftmanha.jpg'
        document.body.style.background = `#e2cd9f`

        msg2.innerHTML = `<p>BOM DIA!</p>`
    } else if (hora <= 18) {
        img.src = 'fttarde.jpg'
        document.body.style.background = `#b9846f`

        msg.innerHTML = `<p>BOA TARDE</p>`
    } else {
        img.src = 'ftnoite.jpg'
        document.body.style.background = `#515154`

        msg.innerHTML = `<p>BOA NOITE</p>`
    }
}