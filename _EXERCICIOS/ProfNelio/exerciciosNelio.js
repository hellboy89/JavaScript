const entrada = require("prompt-sync")()

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

function calcTemperatura() {
    // let escTemp = document.querySelector("input#escTemp");
    let escTemp = String(document.querySelector("input#escTemp").value);
    let temperatura = parseFloat(document.querySelector("input#temperatura").value);
    let resultadoTemperatura = document.querySelector("div#resultadoTemperatura");
    let calculoTemp

    if (escTemp === "c") {
        calculoTemp = (temperatura * (9 / 5)) + 32
        resultadoTemperatura.innerHTML = `O valor em Farenheith é: ${calculoTemp.toFixed(2)}`
    }
    else if (escTemp === "f") {
        calculoTemp = (5 / 9) * (temperatura - 32)
        resultadoTemperatura.innerHTML = `O valor em Celcius é: ${calculoTemp.toFixed(2)}`
    }
    else {
        resultadoTemperatura.innerHTML = `valor incorreto, tente novamente!`
    }

    // resultadoTemperatura.innerHTML = `ola`

}

function calcLanchonete() {
    let codProdComp = parseInt(document.querySelector("input#codProdComp").value);
    let quantComp = parseInt(document.querySelector("input#quantComp").value);
    let resultadoLanchonete = document.querySelector("div#resultadoLanchonete");
    let calculoPrec
    let valProd

    if (codProdComp == 1) {
        valProd = 5.00
    } else if (codProdComp == 2) {
        valProd = 3.50
    } else if (codProdComp == 3) {
        valProd = 4.80
    } else if (codProdComp == 4) {
        valProd = 8.90
    } else if (codProdComp == 5) {
        valProd = 7.32
    } else {
        resultadoLanchonete.innerHTML = `Valor incorreto, tente novamente!`
    }

    calculoPrec = quantComp * valProd;

    resultadoLanchonete.innerHTML = `Valor Total: R$ ${calculoPrec.toFixed(2)}`

}

function calcMultiplos() {
    let val1 = parseInt(document.querySelector("input#val1").value);
    let val2 = parseInt(document.querySelector("input#val2").value);
    let resultadoMultiplos = document.querySelector("div#resultadoMultiplos");

    if (val1 % val2 == 0 || val2 % val1 == 0) {
        resultadoMultiplos.innerHTML = `São Multiplos`
    }
    else {
        resultadoMultiplos.innerHTML = `NÃO São Multiplos`
    }
}

function calcAumento() {
    let salario = parseFloat(document.querySelector("input#salario").value)
    let resultadoAumento = document.querySelector("div#resultadoAumento")
    let calculoSalario
    let porAumento
    let porcentagem
    let novoSalario

    if (salario <= 1000.00) {
        porcentagem = "20%"
        porAumento = 0.20
        calculoSalario = salario * porAumento
        novoSalario = salario + calculoSalario
    } else if (salario > 1000.00 && salario <= 3000.00) {
        porcentagem = "15%"
        porAumento = 0.15
        calculoSalario = salario * porAumento
        novoSalario = salario + calculoSalario
    } else if (salario > 3000.00 && salario <= 8000.00) {
        porcentagem = "10%"
        porAumento = 0.10
        calculoSalario = salario * porAumento
        novoSalario = salario + calculoSalario
    } else if (salario > 8000.00) {
        porcentagem = "5%"
        porAumento = 0.05
        calculoSalario = salario * porAumento
        novoSalario = salario + calculoSalario
    } else {
        resultadoAumento.innerHTML = `Valor incorreto, tente novamente!`
    }

    resultadoAumento.innerHTML = `
    Novo Salario = R$ ${novoSalario.toFixed(2)}<br>
    Aumento = R$ ${calculoSalario.toFixed(2)}<br>
    Porcentagem = ${porcentagem}
    `

}

function calcTempoJogo() {
    let horaInicial = parseInt(document.querySelector("input#horaInicial").value)
    let horaFinal = parseInt(document.querySelector("input#horaFinal").value)
    let resultadoTempoJogo = document.querySelector("div#resultadoTempoJogo")
    let calculo

    if (horaInicial < horaFinal) {
        calculo = horaFinal - horaInicial
        resultadoTempoJogo.innerHTML = `O jogo durou ${calculo} horas.`
    } else {
        calculo = 24 - (horaInicial - horaFinal)
        resultadoTempoJogo.innerHTML = `O jogo durou ${calculo} horas.`
    }
}

function calcCoordenadas() {
    let valX = parseFloat(document.querySelector("input#valX").value)
    let valY = parseFloat(document.querySelector("input#valY").value)
    let resultadoCoordenadas = document.querySelector("div#resultadoCoordenadas")

    if (valX > 0 && valY < 0) {
        resultadoCoordenadas.innerHTML = `Q4`
    } else if (valX > 0 && valY > 0) {
        resultadoCoordenadas.innerHTML = `Q1`
    } else if (valX == 0 && valY == 0) {
        resultadoCoordenadas.innerHTML = `Origem`
    } else if (valX > 0 && valY == 0) {
        resultadoCoordenadas.innerHTML = `Eixo X`
    } else {
        resultadoCoordenadas.innerHTML = `Valor Incorreto, tente novamente!`
    }
}

function calcCrescente() {

    console.log("Digite dois numeros: ")

    while (true) {
        let val1 = entrada("")
        let val2 = entrada("")

        if (val1 > val2) {
            console.log("crescente")
        } else if (val1 < val2) {
            console.log("decrescente")
        }
        else {
            break
        }
    }

}

function calcMediaIdades() {
    console.log("Digite as idades: ")
    let soma = parseFloat(0)
    let contador = parseFloat(0)

    while (true) {
        contador++
        let val = parseFloat(entrada(""))

        if (val > 0) {
            soma += val
        }

        if (contador == 1 && val < 0) {
            console.log("impossivel calcular")
            break
        }

        if (val < 0 && contador > 1) {
            contador--

            let calc = parseFloat(soma / contador)
            console.log("Media = ", calc.toFixed(2))

            break
        }

        // PAREI AQUI, o valor do Calc, está saindo inteiro, e sem decimais, necessário rever.
    }

}

function testeVariavel() {
    let teste = 10

    console.log(teste)
}

function calcSenhaFixa() {
    let senha = parseInt(entrada("Digite a senha: "))

    while (true) {
        if (senha == 2002) {
            console.log("Acesso Permitido")
            break
        }
        else {
            senha = parseInt(entrada("Senha Invalida! Tente novamente: "))
        }
    }
}

function calcQuadrante() {
    console.log("Digite os valores das coordenadas X e Y: ")

    let val1
    let val2

    while (true) {
        val1 = entrada("")
        val2 = entrada("")

        if (val1 > 0 && val2 > 0) {
            console.log("Quadrante Q1")
        } else if (val1 > 0 && val2 < 0) {
            console.log("Quadrante Q4")
        } else if (val1 < 0 && val2 < 0) {
            console.log("Quadrante Q3")
        } else if (val1 < 0 && val2 > 0) {
            console.log("Quadrante Q2")
        } else if (val1 == 0 || val2 == 0) {
            break
        } else {
            console.log("Valor incorreto, tente novamente!")
        }
    }
}

function calcValidacaoNota() {
    let nota1
    let nota2

    while (true) {
        nota1 = parseFloat(entrada("Digite a primeira nota:"))
        while (nota1 < 0 || nota1 > 10) {
            nota1 = parseFloat(entrada("Valor Invalido! tente novamente:"))
        }

        nota2 = parseFloat(entrada("Digite a segunda nota:"))
        while (nota2 < 0 || nota2 > 10) {
            nota2 = parseFloat(entrada("Valor Invalido! tente novamente:"))
        }
        break

    }

    let media = parseFloat((nota1 + nota2) / 2)

    console.log("Media = ", media.toFixed(2))
}

function calcCombustivel() {
    let codigo = 0
    let contAlc = 0
    let contGas = 0
    let contDie = 0

    while (true) {
        codigo = parseInt(entrada("Informe um codigo(1, 2, 3) ou 4 para parar: "))

        if (codigo == 1) {
            contAlc++
        } else if (codigo == 2) {
            contGas++
        } else if (codigo == 3) {
            contDie++
        } else if (codigo == 4) {
            break
        } else {
            continue
        }
    }

    console.log("MUITO OBRIGADO")
    console.log("Alcool: ", contAlc)
    console.log("Gasolina: ", contGas)
    console.log("Diesel: ", contDie)
}

function paresConsecutivos() {
    let valor = entrada("Digite um valor inteiro: ")
    let soma = 0

    while (valor != 0) {
        if (valor % 2 != 0) {
            valor++
        }

        soma = 5 * valor + 20

        console.log("Soma = ", soma)

        valor = entrada("Digite um valor inteiro: ")
    }

}

function calcPar() {
    let calc = 46 % 2

    console.log(calc)
}

function calcTabuada() {
    let num = parseInt(entrada("Deseja a tabuada para qual valor? "))

    for (i = 1; i <= 10; i++) {
        console.log(num, " x ", i, " = ", num * i)
    }
}

function somaImpares() {
    console.log("Digite dois numeros: ")

    let val1 = parseInt(entrada(""))
    let val2 = parseInt(entrada(""))
    let soma = 0

    if (val1 > val2) {
        let troca = val1
        val1 = val2
        val2 = troca
    }

    for (i = val1+1; i < val2; i++) {
        if (i % 2 != 0) {
            soma = soma + i
        }
    }

    console.log("soma dos impares = ", soma)
}

function sequenciaImpares() {
    let valX = parseInt(entrada("Digite o valor de X: "))

    for (i = 0; i < valX; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

function dentroFora() {
    let quantNum = parseInt(entrada("Quantos numeros vc vai digitar? "))
    let valor = 0
    let dentro = 0
    let fora = 0

    for (i = 1; i <= quantNum; i++) {
        valor = parseInt(entrada("Digite um numero: "))

        if (valor >= 10 && valor <= 20) {
            dentro++
        }
        else {
            fora++
        }
    }

    console.log(dentro, " Dentro")
    console.log(fora, " Fora")
}

function parImpar() {
    let quantNum = parseInt(entrada("Quantos numeros vc vai digitar? "))
    let num = 0

    for (i = 1; i <= quantNum; i++) {
        num = parseInt(entrada("Digite um numero: "))

        if (num < 0 && num % 2 != 0) {
            console.log("Impar Negativo")
        } else if (num == 0) {
            console.log("Nulo")
        } else if (num > 0 && num % 2 == 1) {
            console.log("Impar positivo")
        } else if (num < 0 && num % 2 == 0) {
            console.log("Par negativo")
        } else {
            console.log("Valor incorreto, tente novamente.")
        }
    }
}

function mediaPonderada() {
    let quantCase = parseInt(entrada("Quantos casos você vai digitar? "))
    let calc = 0

    for (i = 1; i <= quantCase; i++) {
        console.log("Digite tres numeros: ")
        let val1 = parseFloat(entrada(""))
        let val2 = parseFloat(entrada(""))
        let val3 = parseFloat(entrada(""))

        calc = ((val1 * 2.0) + (val2 * 3.0) + (val3 * 5.0)) / 10.0

        console.log("Media = ", calc.toFixed(1))
    }
}

function divisao() {
    let quantCase = parseInt(entrada("Quantos casos vc vai digitar? "))

    for (i = 1; i <= quantCase; i++) {

        let numerador = parseFloat(entrada("Entre com o numerador: "))
        let denominador = parseFloat(entrada("Entre com o denominador: "))

        if (denominador == 0) {
            console.log("Divisao Impossivel")
        } else {
            let calc = numerador / denominador
            console.log("Divisao = ", calc.toFixed(2))
        }
    }
}

function fatorial() {
    let valN = parseInt(entrada("Digite o valor de N: "))

    let fatorial = 1

    for (i = valN; i > 0; i--) {
        fatorial = fatorial * i
    }

    console.log("Fatorial = ", fatorial)
}

function experiencias() {
    let quantCasos = parseInt(entrada("Quantos casos de teste serão digitados? "))
    let quantCoelhos = 0
    let quantRatos = 0
    let quantSapos = 0
    let quantTotal = 0

    for (i = 1; i <= quantCasos; i++) {
        let tipoCob = null
        let quantCob = parseInt(entrada("Quantidade de cobaias: "))
        tipoCob = String(entrada("Tipo de cobaia: "))
        quantTotal += quantCob

        if (tipoCob == "c") {
            quantCoelhos += quantCob
        } else if (tipoCob == "r") {
            quantRatos += quantCob
        } else if (tipoCob == "s") {
            quantSapos += quantCob
        }
    }

    let pcoelhos = (quantCoelhos / quantTotal) * 100.0
    let pratos = (quantRatos / quantTotal) * 100.0
    let psapos = (quantSapos / quantTotal) * 100.0

    console.log("Relatorio Final:")
    console.log("Total: ", quantTotal)
    console.log("Total de coelhos: ", quantCoelhos)
    console.log("Total de ratos: ", quantRatos)
    console.log("Total de sapos: ", quantSapos)
    console.log("Percentual de coelhos: ", pcoelhos.toFixed(2))
    console.log("Percentual de ratos: ", pratos.toFixed(2))
    console.log("Percentual de sapos: ", psapos.toFixed(2))
}

function negativos() {
    let quantNum = parseInt(entrada("Quantos numeros vc vai digitar? "))
    let valores = []

    for (i = 0; i < quantNum; i++) {
        valores[i] = parseInt(entrada("Digite um numero: "))
    }

    console.log("Valores Negativos: ")
    
    for (i = 0; i < quantNum; i++) {
        if (valores[i] < 0) {
            console.log(valores[i])
        }
    }
    
}

function somaVetor() {
    let quantNum = parseInt(entrada("Quantos numeros vc vai digitar? "))
    let valores = []
    let soma = 0
    let contador = 0

    for (i = 0; i < quantNum; i++) {
        valores[i] = parseFloat(entrada("Digite um numero: "))
        contador++
    }

    for (i = 0; i < quantNum; i++) {
        soma += valores[i]
    }

    let calc = soma / contador

    console.log("Valores = ", valores)
    console.log("Soma = ", soma.toFixed(2))
    console.log("Media = ", calc.toFixed(2))
    
}

function alturas() {
    let quantPessoas = parseInt(entrada("Quantas pessoas serão digitadas? "))
    let nome = []
    let idade = []
    let altura = []
    let contPessoasTotais = 0
    let contPessoasMenos16 = 0
    let nomeMenos16 = []
    let somaAltura = 0

    for (i = 0; i < quantPessoas; i++) {
        console.log("Dados da ", i + 1, "a pessoa: ")
        nome[i] = entrada("Nome: ")
        idade[i] = parseInt(entrada("Idade: "))
        altura[i] = parseFloat(entrada("Altura: "))
        contPessoasTotais++
    }

    for (i = 0; i < quantPessoas; i++) {
        somaAltura += altura[i]

        if (idade[i] < 16) {
            contPessoasMenos16++
            nomeMenos16[i] = nome[i]
        }
    }
    
    let calcAltMedia = somaAltura / contPessoasTotais
    let porMenos16 = (contPessoasMenos16 / quantPessoas) * 100

    console.log("Altura média: ", calcAltMedia.toFixed(2))
    console.log("Pessoas com menos de 16 anos: ", porMenos16.toFixed(1))

    for (i = 0; i < quantPessoas; i++) {
        if (nomeMenos16[i] != undefined) {
            console.log(nomeMenos16[i])
        }
    }

}

function numerosPares() {
    let quantNum = parseInt(entrada("Quantos numeros vc vai digitar? "))
    let val = []
    let numPar = []
    let contador = 0

    for (i = 0; i < quantNum; i++) {
        val[i] = parseInt(entrada("Digite um numero: "))

        if (val[i] % 2 == 0) {
            numPar[i] = val[i]
            contador++
        }
    }

    console.log("Numeros Pares: ")

    for (i = 0; i < quantNum; i++) {
        if (numPar[i] != undefined) {
            console.log(numPar[i])
        }
    }

    console.log("Quantidade de Pares = ", contador)

}

function maiorPosicao() {
    let quantNum = parseInt(entrada("Quantos numeros vc vai digitar? "))
    let valores = []
    
    for (i = 0; i < quantNum; i++) {
        valores[i] = parseFloat(entrada("Digite um numero: "))
    }
    // Para pegar um valor maior melhor forma é fazer comparação como abaixo. O javascript tem funções específicas para pegar o valor Max, mas preferi não usar.
    let maior = valores[0]
    let posicaoMaior = 0

    for (i = 0; i < quantNum; i++) {
        if (valores[i] > maior) {
            maior = valores[i]
            posicaoMaior = i
        }
    }

    console.log("Maior Valor = ", maior.toFixed(1))
    console.log("Posicao do Maior Valor = ", posicaoMaior)
}

function mostraMaiorValor() {
    let valores = [10, 20, 30]

    var max = valores.reduce(function(a, b) {
        return Math.max(a, b)
    }, -Infinity)

    console.log(max)
}

function somaVetores() {
    let quantValores = parseInt(entrada("Quantos valores vai ter cada vetor? "))
    let valoresA = []
    let valoresB = []
    let somaAB = []

    console.log("Digite os valores do vetor A: ")
    for (i = 0; i < quantValores; i++) {
        valoresA[i] = parseInt(entrada(""))
    }

    console.log("Digite os valores do vetor B: ")
    for (i = 0; i < quantValores; i++) {
        valoresB[i] = parseInt(entrada(""))
    }

    for (i = 0; i < quantValores; i++) {
        somaAB[i] = valoresA[i] + valoresB[i]
    }

    console.log("Vetor Resultante: ", somaAB)
}

function abaixoDaMedia() {
    let quantElementos = parseInt(entrada("Quantos elementos vai ter o vetor? "))
    let elementos = []
    let contador = 0
    let elementosAbaixoMedia = []

    for (i = 0; i < quantElementos; i++) {
        elementos[i] = parseFloat(entrada("Digite um numero: "))
        contador++
    }

    // PAREI AQUI, CONTINUAR ACIMA...
}

abaixoDaMedia()