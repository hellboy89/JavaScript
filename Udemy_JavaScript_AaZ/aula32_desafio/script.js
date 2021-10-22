corredor1 = document.getElementById('corredor1')
corredor2 = document.getElementById('corredor2')
corredor3 = document.getElementById('corredor3')
resultado = document.getElementById('resultado')

_corredor1 = 'Juan'
_corredor2 = 'Cleber'
_corredor3 = 'Faria'

_temp1Corredor1 = 3.10
_temp2Corredor1 = 3.50
_temp3Corredor1 = 3.80

_temp1Corredor2 = 3.80
_temp2Corredor2 = 3.55
_temp3Corredor2 = 3.15

_temp1Corredor3 = 3.10
_temp2Corredor3 = 3.90
_temp3Corredor3 = 3.25

_media1 = (_temp1Corredor1 + _temp2Corredor1 + _temp3Corredor1) / 3
_media2 = (_temp1Corredor2 + _temp2Corredor2 + _temp3Corredor2) / 3
_media3 = (_temp1Corredor3 + _temp2Corredor3 + _temp3Corredor3) / 3

_vencedor = _media1

if (_vencedor > _media2) {
    _nome = _media2
    _nome = _corredor2
}
else if (_vencedor > _media3) {
    _vencedor = _media3
    _nome = _corredor3
}
else {
    _vencedor = _media1
    _nome = _corredor1
}

corredor1.innerHTML = `Corredor 1 (${_corredor1}) = ${_media1.toFixed(2)}`
corredor2.innerHTML = `Corredor 2 (${_corredor2}) = ${_media2.toFixed(2)}`
corredor3.innerHTML = `Corredor 3 (${_corredor3}) = ${_media3.toFixed(2)}`
resultado.innerHTML = `Vencedor é corredor ${_nome}, com tempo de ${_vencedor.toFixed(2)}`

