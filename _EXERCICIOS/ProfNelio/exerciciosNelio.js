function menorDeTres() {
    let valor1 = parseFloat(document.querySelector("input#valor1").value);
    let valor2 = parseFloat(document.querySelector("input#valor2").value);
    let valor3 = parseFloat(document.querySelector("input#valor3").value);
    let resultadoMenorDeTres = document.querySelector("div#resultadoMenorDeTres");
    let menor;

    if (valor1 < valor2 && valor1 < valor3) {
        menor = valor1;
    }
    else if (valor2 < valor1 && valor2 < valor3) {
        menor = valor2
    }
    else {
        menor = valor3
    }

    resultadoMenorDeTres.innerHTML = `O menor valor é ${menor}`;

}

function operadora() {
    let quantMinutos = parseInt(document.querySelector("input#quantMinutos").value);
    let resultadoOperadora = document.querySelector("div#resultadoOperadora");

    if (quantMinutos <= 100) {
        resultadoOperadora.innerHTML = `R$ 50.00`;
    }
    else {
        let calc = ((quantMinutos - 100) * 2.00) + 50;
        resultadoOperadora.innerHTML = `R$ ${calc.toFixed(2)}`;
    }
}

function trocoVerificado() {
    let precoUnitario = parseFloat(document.querySelector("input#precoUnitario").value);
    let quantidadeComprada = parseInt(document.querySelector("input#quantidadeComprada").value);
    let dinheiroRecebido = parseFloat(document.querySelector("input#dinheiroRecebido").value);
    let resultadoTrocoVerificado = document.querySelector("div#resultadoTrocoVerificado");

    let troco = dinheiroRecebido - (precoUnitario * quantidadeComprada);
    let total = precoUnitario * quantidadeComprada;

    if (total < dinheiroRecebido) {
        resultadoTrocoVerificado.innerHTML = `O troco é R$ ${troco.toFixed(2)}`;
    }
    else {
        let calc = total - dinheiroRecebido;
        resultadoTrocoVerificado.innerHTML = `Dinheiro Insuficiente. Faltam ${calc.toFixed(2)}`;
    }
    
}

function calcularGlicose() {
    let glicose = parseFloat(document.querySelector("input#glicose").value);
    let resultadoGlicose = document.querySelector("div#resultadoGlicose");

    if (glicose < 100) {
        resultadoGlicose.innerHTML = `Glicose Normal`;
    }
    else if (glicose >= 100 && glicose <= 140) {
        resultadoGlicose.innerHTML = `Glicose Elevada`;
    }
    else {
        resultadoGlicose.innerHTML = `Diabetes`;
    }
}

function calcularDistancia() {
    let distancia1 = parseFloat(document.querySelector("input#distancia1").value);
    let distancia2 = parseFloat(document.querySelector("input#distancia2").value);
    let distancia3 = parseFloat(document.querySelector("input#distancia3").value);
    let resultadoDardo = document.querySelector("div#resultadoDardo");

    let maior = distancia1;

    if (distancia2 > distancia3) {
        maior = distancia2;
    }
    else {
        maior = distancia3;
    }

    resultadoDardo.innerHTML = `O maior dardo é ${maior.toFixed(2)}`;

}

