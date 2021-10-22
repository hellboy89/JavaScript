function verificar() {
    let telefonouVitima = document.getElementById('telefonouVitima')
    let localCrime = document.getElementById('localCrime')
    let moraPerto = document.getElementById('moraPerto')
    let deviaDindin = document.getElementById('deviaDindin')
    let trabalhoVitima = document.getElementById('trabalhoVitima')
    let resultado = document.getElementById('resultado')

    let _telefonouVitima = String(telefonouVitima.value)
    let _localCrime = String(localCrime.value)
    let _moraPerto = String(moraPerto.value)
    let _deviaDindin = String(deviaDindin.value)
    let _trabalhoVitima = String(trabalhoVitima.value)

    let _soma = 0

    if (_telefonouVitima == "sim") {
        _soma++
    }
    if (_localCrime == "sim") {
        _soma++
    }
    if (_moraPerto == "sim") {
        _soma++
    }
    if (_deviaDindin == "sim") {
        _soma++
    }
    if (_trabalhoVitima == "sim") {
        _soma++
    }

    if (_soma == 1) {
        resultado.innerHTML = "Inocente"
    }
    else if (_soma == 2) {
        resultado.innerHTML = "Suspeita"
    }
    else if (_soma == 3) {
        resultado.innerHTML = "Cumplice"
    }
    else if (_soma == 4) {
        resultado.innerHTML = "Cumplice"
    }
    else if (_soma == 5) {
        resultado.innerHTML = "Assassino"
    }
    else {
        resultado.innerHTML = "Valor incorreto!"
    }

    let soma = document.getElementById('soma')
    soma.innerHTML = `Soma: ${_soma}`
    
}
