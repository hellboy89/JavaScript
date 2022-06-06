// import Teste3 from './class.js'

// var dados = new Teste3

// dados.horarioAcordar = 6
// dados.horarioSaida = 7
// dados.tomouBanho = true
// dados.tomouCafe = true

// dados.podeSair()

// dados.dados()

// olaHehe()
// olaMundinho()
// hello()


function somaValores() {
    var valor1 = parseFloat(window.document.querySelector("#valor1").value)
    var valor2 = parseFloat(window.document.querySelector("#valor2").value)
    var res = window.document.getElementById("res")

    res.innerHTML = ''
    var soma = valor1 + valor2
    res.innerHTML = `A soma dos valores é: ${soma}`
    
}

function somaMais() {
    
}

function xinga() {
    var res2 = window.document.querySelector("#res2")
    res2.innerHTML = "vai tomar no olho!"

}

