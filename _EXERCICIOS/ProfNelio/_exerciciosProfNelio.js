const entrada = require("prompt-sync")()
// RODAR ESSE COMANDO AO LADO PARA USAR ESSE DE CIMA: npm install prompt-sync

function entradaText() {
    //Run "npm install prompt-sync" in the terminal (ANTES DE UTILIZAR A ENTRADA DE TEXTO.)

    const prompt = require('prompt-sync')()
    
    var name = prompt('qual seu nome? ')
    var idade = prompt('qual sua idade? ')
    
    console.log(`seu nome é ${name} e tem ${idade}`)
}


function _03_terreno() {
    const entrada = require('prompt-sync')()
    
    var largTerreno = entrada("Digite a largura do terreno: ")
    var compTerreno = entrada("Digite o comprimento do terreno: ")
    var valMetro = entrada("Digite o valor do metro quadrado: ")

    var areaTerreno = largTerreno * compTerreno
    var precoTerreno = areaTerreno * valMetro

    console.log(`Area do Terreno = ${areaTerreno.toFixed(2)}`)
    console.log(`Preco do Terreno = ${precoTerreno.toFixed(2)}`)

    return entrada
}

function usandoFuncaoOutra() {
    _03_terreno()
    
    var nome = entrada("qual seu nome? ")

    console.log(`seu nome é ${nome}`)
}

function _03_retangulo() {
    // Necessário forçar o tipo de variável usando o Parse como abaixo, pois sem ele qualquer variável de entrada é string.
    var baseRet = parseFloat(entrada("base: "))
    var altRet = parseFloat(entrada("altura: "))

    var calcArea = baseRet * altRet
    var perimetro = baseRet + baseRet + altRet + altRet
    var diagonal = Math.sqrt((baseRet * baseRet) + (altRet * altRet))

    console.log(`Area = ${calcArea.toFixed(4)}`)
    console.log(`Perimetro = ${perimetro.toFixed(4)}`)
    console.log(`Diagonal = ${diagonal.toFixed(4)}`)

}

function mostraTipoVariavel() {
    var teste1 = entrada("qual valor? ")

    console.log(typeof teste1)
}

function _03_idades() {
    console.log("Dados da primeira pessoa: ")
    var nome = entrada("Nome: ")
    var idade = parseInt(entrada("Idade: "))
    console.log("Dados da segunda pessoa: ")
    var nome2 = entrada("Nome: ")
    var idade2 = parseInt(entrada("Idade: "))

    var media = (idade + idade2) / 2

    console.log(`A idade média da ${nome} e ${nome2} é de ${media.toFixed(1)} anos.`)
}

function _03_soma() {
    var valX = parseInt(entrada("Digite o valor de X: "))
    var valY = parseInt(entrada("Digite o valor de Y: "))

    var soma = valX + valY

    console.log(`Soma = ${soma}`)
}

function _03_troco() {
    var precoUnit = parseFloat(entrada("Preco unitario do produto: "))
    var quantComp = parseInt(entrada("Quantidade comprada: "))
    var dinRec = parseFloat(entrada("Dinheiro Recebido: "))
    var troco = dinRec - (precoUnit * quantComp)
    console.log(`Troco = ${troco.toFixed(2)}`)
}

function _03_circulo() {
    var valRaio = parseFloat(entrada("Digite o valor do raio do circulo: "))
    var area = 3.14159 * (Math.pow(valRaio, 2))
    console.log(`Area = ${area.toFixed(3)}`)
}

function _03_pagamento() {
    var nome = entrada("Nome: ")
    var valHora = parseFloat(entrada("Valor por hora: "))
    var horaTrab = parseInt(entrada("Horas trabalhadas: "))
    var calc = valHora * horaTrab

    console.log(`O pagamento para ${nome} deve ser R$ ${calc.toFixed(2)}.`)
}

function _03_consumo() {
    var distPerc = parseInt(entrada("distancia percorrida: "))
    var combGast = parseFloat(entrada("combustível gasto: "))
    var consumo = distPerc / combGast
    console.log(`Consumo medio = ${consumo.toFixed(3)}`)
}

function _03_medidas() {
    var medA = parseFloat(entrada("Medida A: "))
    var medB = parseFloat(entrada("Medida B: "))
    var medC = parseFloat(entrada("Medida C: "))
    var areaQuad = Math.pow(medA, 2)
    var areaTri = (medA * medB) / 2
    var areaTrap = ((medA + medB) * medC) / 2

    console.log(`Area do quadrado = ${areaQuad.toFixed(4)}`)
    console.log(`Area do Triangulo = ${areaTri.toFixed(4)}`)
    console.log(`Area do Trapezio = ${areaTrap.toFixed(4)}`)
}

function _03_duracao() {
    var duracao = parseInt(entrada("Digite a duracao em segundos: "))
    var horas = duracao / 3600
    var resto = duracao % 3600
    var minutos = resto / 60
    var segundos = resto % 60

    console.log(`${horas.toFixed(0)}:${minutos.toFixed(0)}:${segundos.toFixed(0)}`)
}

function _04_notas() {
    var nota1 = parseFloat(entrada("Digite a primeira nota: "))
    var nota2 = parseFloat(entrada("Digite a segunda nota: "))
    var media = (nota1 + nota2)

    console.log(`Nota Final = ${media.toFixed(1)}`)

    if (media < 60.0) {
        console.log("reprovado")
    }
}

function _04_baskara() {
    var coefA = parseFloat(entrada("Coeficiente A: "))
    var coefB = parseFloat(entrada("Coeficiente B: "))
    var coefC = parseFloat(entrada("Coeficiente C: "))
    var delta = (coefB * coefB) - (4 * coefA * coefC)

    if (delta < 0) {
        console.log("Esta equação não possui raizes reais.")
    }
    else {
        var x1 = ((-coefB) + Math.sqrt(delta)) / (2 * coefA)
        var x2 = ((-coefB) - Math.sqrt(delta)) / (2 * coefA)

        console.log(`X1 = ${x1.toFixed(4)}`)
        console.log(`X2 = ${x2.toFixed(4)}`)
    }
}

function _04_menorDeTres() {
    // parei aqui
}

class _04_condicional {
    val1
    val2
    val3

    constructor(val1, val2, val3) {
        this.val1 = val1
        this.val2 = val2
        this.val3 = val3
    }

    menorDeTres() {
        console.log("pegou aqui!")
    }
}

function __04_condicional() {
    const menorDeTres = new _04_condicional(7, 3, 8)
    menorDeTres.menorDeTres()
}

import Teste from "./classExerProfNelio.js";
var teste = new Teste

teste.nome = "Juan"
teste.idade = 32
teste.status()
