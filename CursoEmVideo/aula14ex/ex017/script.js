function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, Digite um número!')
    }
    else {
        let n = Number(num.value)
        let c = 1
        // Abaixo é para limpar o select para não adicionar novas linhas.
        tab.innerHTML = ''
        while (c <= 10) {
            // A linha abaixo é para criar as opções no select, irá adicionar as linhas.
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}
