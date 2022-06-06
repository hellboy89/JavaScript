export class Teste2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    
    status() {
        console.log("hello world!!")
    }

    lerDados() {
        console.log(`O nome é: ${this.nome}`)
        console.log(`A idade é: ${this.idade}`)
    }
}

export function hello() {
    console.log("hello word")
}

export default class Teste3 {
    constructor(horarioAcordar, horarioSaida, tomouCafe = false, tomouBanho = false, podeSair = false, jaSaiu = false) {
        this.horarioAcordar = horarioAcordar
        this.horarioSaida = horarioSaida
        this.tomouCafe = tomouCafe
        this.tomouBanho = tomouBanho
        this.podeSair = podeSair
        this.jaSaiu = jaSaiu
    }
    
    dados(){
        console.log(`Hora de acordar: ${this.horarioAcordar}`)
        console.log(`Hora de Sair: ${this.horarioSaida}`)
        console.log(`Tomou Café? ${this.tomouCafe}`)
        console.log(`Tomou Banho? ${this.tomouBanho}`)
        console.log(`Pode Sair? ${this.podeSair}`)
        console.log(`Já Saiu? ${this.jaSaiu}`)
    }

    podeSair() {
        if (this.tomouBanho == true && this.tomouCafe == true) {
            this.podeSair = true
        }
        else {
            this.podeSair = false
        }
    }
}

export function olaHehe() {
    console.log("ola mundo")
}

export function olaMundinho() {
    console.log("ola mundinho de bosta")
}

export function repeticao() {
    var contador = 0
    while (true) {
        contador++
        console.log(`contagem em: ${contador}`)

        if (contador == 10) {
            console.log("PARANDO!...")
            break
        }
    }
}

