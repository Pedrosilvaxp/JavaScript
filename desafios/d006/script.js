function converter() {
    const temperatura = Number.parseFloat(prompt('Digite uma temperatura em °C:'))

    var h2 = document.querySelector('h2')
    h2.innerHTML = `A temperatura de ${temperatura} °C, corresponde a...`

    // Kelvin
    var res1 = document.getElementById('res1')
    var calc1 = Number.parseFloat(temperatura + 273.15)
    res1.innerHTML = `${calc1}°K (Kelvin)`

    // Farenheint
    var res2 = document.getElementById('res2')
    var calc2 = Number.parseFloat(temperatura * 9 / 5 + 32)
    res2.innerHTML = `${calc2}°F (Farenheint)`
}