function mostraValor() {
    let valor1 = parseFloat(document.querySelector("input#valor1").value)
    let valor2 = parseFloat(document.querySelector("input#valor2").value)
    let resultado = document.querySelector("div#resultado")

    let soma = valor1 + valor2

    resultado.innerHTML = soma
}

