// Testando objetos com chamada de função.

const carro = {
    nome: "Fiesta",
    marca: "Ford",
    cor: "Amarelo",
    ano: 2012,
    consumo: 11,
    capacidadeTanque: 45,
    motor: {
        cavalos: 126,
        cilindradas: 1.6
    },
    kmPercorridos: function() {
        return `O ${this.nome} percorre ${this.consumo * this.capacidadeTanque} Km com um tanque cheio.`;
    }
}

console.log(carro.kmPercorridos())


