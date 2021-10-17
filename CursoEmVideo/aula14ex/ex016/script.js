function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo') 

    var resultado = window.document.getElementById('resultado')
    
    /* CÓDIGO ABAIXO DANDO ERRO DE INPUTHTML
    for (var i = inicio; i <= fim; i += passo) {
        resultado.innerHTML = i
        //resultado.innerHTML = document.write(`${i}`)
    }
    */

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = "Impossível Contar!"
        //window.alert('[ERRO] Faltam dados!')
    }
    else {
        resultado.innerHTML = `Contando: <br/>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando Passo 1')
            p = 1
        }

        if (i < f) {
            for (var c = i; c <= f; c += p) {
                // O diferencial está nesse "+=" pois ele irá adicionar os valores somados extras.
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
            resultado.innerHTML += `\u{1F3C1}`
        }
        else {
            for (var c = i; c >= f ; c -= p) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
            resultado.innerHTML += `\u{1F3C1}`
        }
    }
    
}

