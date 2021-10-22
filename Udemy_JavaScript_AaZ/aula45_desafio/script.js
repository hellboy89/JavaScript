function addTemp() {

    quantTemp = document.getElementById('quantTemp')
    resultado = document.getElementById('resultado')

    _quantTemp = Number(quantTemp.value)
    _somaTemp = 0
    
    for (i = 1; i <= _quantTemp; i++) {
        let _pegTemp = parseFloat(prompt("Qual valor? "))
        if (_pegTemp == 0) {
            _quantTemp--
        }
        else {
            _somaTemp = _somaTemp + _pegTemp
        }
    }

    let _media = _somaTemp / _quantTemp

    resultado.innerHTML = `Média = ${_media.toFixed(1)}`

}