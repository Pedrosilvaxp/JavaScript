const agora = new Date()
let hora = agora.getHours()
const minu = agora.getMinutes()

const fundo = document.querySelector('body')
var res = document.querySelector('#res')
var foto = document.querySelector('#foto') 


if (hora >= 5 && hora <= 11) {

    fundo.style.background = '#E6DCDB'
    res.innerHTML = `Agora são ${hora}:${minu} da manhã
    <br>BOM DIA!`
    foto.setAttribute('src', 'demanha.jpg')

} else if (hora < 18) {

    fundo.style.background = '#CD5844'
    res.innerHTML = `Agora são ${hora}:${minu} da tarde
    <br>BOA TARDE!`
    foto.setAttribute('src', 'detarde.jpg')

} else {
    
    fundo.style.background = '#0E1116'
    res.innerHTML = `Agora são ${hora}:${minu} da noite
    <br>BOA NOITE`
    foto.setAttribute('src', 'denoite.jpg')

}