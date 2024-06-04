function conversor() {
    var metros = Number.parseFloat(prompt('Digite uma distância em metros:'))

    var h2 = document.querySelector('h2')
    h2.innerHTML = `A distância de ${metros} metros, corresponde a...`

    // Conversores 
    var res1 = document.getElementById('res1')
    var calc1 = metros / 1000
    res1.innerHTML = `${calc1} quilômetros (km)`

    var res2 = document.getElementById('res2')
    var calc2 = metros / 100
    res2.innerHTML = `${calc2} hectômetros (hm)`

    var res3 = document.getElementById('res3')
    var calc3 = metros / 10
    res3.innerHTML = `${calc3} decâmetros(dam)`

    var res4 = document.getElementById('res4')
    var calc4 = metros * 10
    res4.innerHTML = `${calc4} decímetros(dm)`

    var res5 = document.getElementById('res5')
    var calc5 = metros * 100
    res5.innerHTML = `${calc5} centímetros (cm)`

    var res6 = document.getElementById('res6')
    var calc6 = metros * 1000
    res6.innerHTML = `${calc6} milímetros (mm)`
}