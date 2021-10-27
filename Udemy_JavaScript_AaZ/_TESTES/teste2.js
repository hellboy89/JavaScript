let valor1 = document.querySelector("input#valor1")
let valor2 = document.querySelector("#valor2")
let resultado = document.querySelector("#resultado")
let nome = document.querySelector("#nome")

function teste() {

    let _valor1 = parseInt(valor1.value)
    let _valor2 = parseInt(valor2.value)
    let _nome = String(nome.value)

    console.log(typeof(_valor1))

    let calc = _valor1 + _valor2

    console.log(calc)
    resultado.innerHTML = `O valor correto é ${calc}`
    escritaNome(_nome)

    function escritaNome(nome) {
        resposta2 = document.querySelector("#resultado2")
        respSaida = resposta2.innerHTML = `O nome informado é ${nome}`
        return respSaida
    }

}

function limpaResultado() {

    resultado.innerHTML = ""
    resultado2.innerHTML = ""
    valor1.value = ""   
    valor2.value = ""
    nome.value = ""

}

