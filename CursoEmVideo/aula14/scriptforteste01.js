document.write(`<strong>Contagem usando FOR.</strong><br/>`)
for (var i = 0; i <= 30; i++) {
    var resultado = document.getElementById('resultado')
    document.write(`${i} `)
}

document.write(`<br/><br/>`)

document.write(`<strong>Contagem usando While.</strong><br/>`)
var cont = 0
while (true) {
    cont++
    document.write(cont + ` `)
    var resultado2 = document.getElementById('resultado2')
    //resultado2.innerHTML = document.write(cont)
    //resultado2.document.write(cont)
    if (cont == 150) {
        break
    }
}

document.write(`<br/><br/>`)
document.write(`<strong>Contagem com Resultado3.</strong><br/>`)
var resultado3 = document.getElementById('resultado3')
var cont2 = 0
while (true) {
    cont2++
    //document.write(cont2 + ` `)
    resultado3.innerText = document.write(cont2 + ` `)
    if (cont2 == 30) {
        break
    }
}
