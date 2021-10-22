barra = document.getElementById('quantProd')
barra.focus()

function limpar() {
    resultado = document.getElementById('resultado')
    resultado.innerHTML = 'Valor Total'
    barra.value = ' '
    barra.focus()
}

function mostrarValor() {
    quantProd = document.getElementById('quantProd')
    resultado = document.getElementById('resultado')
    resultado.innerHTML = ''

    _quantProd = Number(quantProd.value)
    _soma = 0

    for (let i = 1; i <= _quantProd; i++) {
        let _valor = parseFloat(prompt('Informe o valor do produto? '))
        if (_valor > 1.99) {
            alert('valor incorreto, somente produtos abaixo de 1.99, tente novamente')
            resultado.innerHTML = ''
            limpar()
            break
        }
        else {
            _soma = _soma + _valor
        }
    }

    resultado.innerHTML = `Valor Total: R$ ${_soma.toFixed(2)}`   
}
