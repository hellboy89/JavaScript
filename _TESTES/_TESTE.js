const entrada = require("prompt-sync")()
// RODAR ESSE COMANDO AO LADO PARA USAR ESSE DE CIMA: npm install prompt-sync

class Dados {
    nome
    sobrenome
    idade
    altura
    nota1
    nota2
    media
    statusSaude
    profissao
    gostaEmprego
    querRepeticao
    limite

    constructor(nome, sobrenome, idade, altura, nota1, nota2, media, statusSaude, profissao, gostaEmprego, querRepeticao, limite) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.altura = altura
        this.nota1 = nota1
        this.nota2 = nota2
        this.media = media
        this.statusSaude = statusSaude
        this.profissao = profissao
        this.gostaEmprego = gostaEmprego
        this.querRepeticao = querRepeticao
        this.limite = limite
    }

    dados() {
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos e ${this.altura} de altura.`)
    }

    notas() {
        this.media = (this.nota1 + this.nota2) / 2

        console.log(`Seu nome é ${this.nome} ${this.sobrenome} com altura de ${this.altura} e ${this.idade} de idade.`)

        if (this.media > 6) {
            console.log("aprovado!")
        }
        else {
            console.log("reprovado!")
        }
    }

    escolaridade() {
        console.log(this.sobrenome)
    }

    saude() {
        if (this.statusSaude == true) {
            console.log("está BEM de saúde.")
        }
        else {
            console.log("tá mal hein.")
        }
    }

    emprego() {
        console.log(`vc trabalha como ${this.profissao}`)

        if (this.gostaEmprego == true) {
            console.log("vc GOSTA do seu emprego!")
        }
        else {
            console.log("vc NÃO gosta do seu emprego!")
        }
    }

    repetir() {
        if (this.querRepeticao == true) {
            var contador = 0
            while (true) {
                contador++
                console.log(contador)
                if (contador == this.limite) {
                    break
                }
            }
        }
    }
}

// const dados2 = new Dados("Juan", "Cleber", 32, 1.92)
function pegandoValores() {
    var contar = parseInt(entrada('quer contar ate quanto? '))
    const nota2 = new Dados("Juan", "Cleber", 32, 1.92, 3, 7, null, true, "Analista TI", false, true, contar)
    
    // console.log(dados2)
    // dados2.dados()
    nota2.notas()
    console.log("=================================")
    nota2.dados()
    console.log("=================================")
    nota2.escolaridade()
    console.log("=================================")
    console.log(nota2.nome)
    console.log("=================================")
    nota2.saude()
    console.log("=================================")
    nota2.emprego()
    console.log("=================================")
    nota2.repetir()
}

class Monitor {
    polegadas
    cor
    ligado
    canal

    constructor(polegadas = 30, cor = "preto", ligado = true, canal = 0) {
        this.polegadas = polegadas
        this.cor = cor
        this.ligado = ligado
        this.canal = canal
    }

    ligarMonitor() {
        return this.ligado
    }

    status() {
        if (this.ligado == true) {
            console.log(`Monitor está LIGADO.`)
        }
        else {
            console.log(`Monitor está DESLIGADO.`)
        }
    }

    tamanho() {
        if (this.polegadas > 25) {
            console.log(`Com ${this.polegadas} esse monitor é GRANDE.`)
        }
        else if (this.polegadas == null) {
            console.log(`O valor ${this.polegadas} não é VÁLIDO`)
        }
        else {
            console.log(`Com ${this.polegadas} esse monitor é PEQUENO.`)
        }
    }

    contagemPolegadas() {
        var contador = this.polegadas
        while (true) {
            contador--
            console.log(contador)
            if (contador == 0) {
                break
            }
        }
    }

    escolhaCanal() {
        if (this.canal == 14 && this.ligado == true) {
            console.log("para de ver SEXHOT seu zé punheta.")
        }
        else {
            console.log("a TV precisa está ligarda.")
        }

    }
}

function gerandoMonitor() {
    var monitor1 = new Monitor

    monitor1.ligado = true
    monitor1.polegadas = 15
    monitor1.canal = 14

    monitor1.ligarMonitor()

    monitor1.status()

    monitor1.tamanho()
    monitor1.contagemPolegadas()
    monitor1.escolhaCanal()

}

// gerandoMonitor()

class Teclado {
    numTeclas
    cor
    tecladoNumerico
    tipoTeclado

    constructor(numTeclas = null, cor = null, tecladoNumerico = null, tipoTeclado = null) {
        this.numTeclas = numTeclas
        this.cor = cor
        this.tecladoNumerico = tecladoNumerico
        this.tipoTeclado = tipoTeclado
    }

    statusTeclado() {
        console.log(`Numero de Teclas: ${this.numTeclas}`)
        console.log(`Cor do Teclado: ${this.cor}`)
        console.log(`Teclado Numérico? ${this.tecladoNumerico}`)
        console.log(`Tipo Teclado: ${this.tipoTeclado}`)
    }

}

function verTeclado() {
    var teclado1 = new Teclado

    teclado1.numTeclas = 10
    teclado1.cor = "preto"
    teclado1.tecladoNumerico = false
    teclado1.tipoTeclado = "mecanico"

    teclado1.statusTeclado()
}

class TesteClasse_PegaNome {
    nome
    sobrenome
    idade
    cpf
    dataNascimento

    constructor (nome, sobrenome, idade, cpf, dataNascimento) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.cpf = cpf
        this.dataNascimento = dataNascimento
    }

    status() {
        console.log(`Nome: ${this.nome}`)        
        console.log(`Sobrenome: ${this.sobrenome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`Data Nascimento: ${this.dataNascimento}`)
    }
}

function usaClasse_pegaNome() {
    var usaNome = new TesteClasse_PegaNome
    usaNome.nome = "Juan Cleber"

    usaNome.status()
}

function helloWord() {
    console.log("ola_mundo")
}

helloWord()

