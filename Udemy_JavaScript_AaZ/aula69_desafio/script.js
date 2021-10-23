function calcular() {

    let nota1 = document.getElementById('nota1')
    let nota2 = document.getElementById('nota2')
    let nota3 = document.getElementById('nota3')
    //resultado = document.getElementById('resultado')
    let aprovados = document.querySelector('p#aprovados')
    let reprovados = document.querySelector('p#reprovados')
    let alerta = document.querySelector('h3#alerta')
    
    let _nota1 = parseFloat(nota1.value)
    let _nota2 = parseFloat(nota2.value)
    let _nota3 = parseFloat(nota3.value)
    
    let _vetNotas = [_nota1, _nota2, _nota3]

    let _aprovado = 0
    let _reprovado = 0
    
    for (let i = 0; i < _vetNotas.length; i++) {
        if (_vetNotas[i] > 6.0) {
            _aprovado++
        }
        else {
            _reprovado++
        }
    }
    
    aprovados.innerHTML = `N Aprovados ${_aprovado}`
    reprovados.innerHTML = `N Reprovados ${_reprovado}`

    
}
