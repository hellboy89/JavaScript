/*
Sistema de Cadastro
*/

let nome = 'Juan'
let sobrenome = 'Cleber'
let idade = 24
const numClient = 095864

// Nesse caso como a variável já foi declarada mais acima, não é necessário usar o "let"
// novamente, basta colocar o nome da variável e inserir o novo valor, que irá substituir.
idade = 33

let valorEmpretimo = 150000
let taxaDeJuros = 0.10
let numAnos = 6
let ehBomPagador = "SIM"
ehBomPagador = true

if (ehBomPagador) {
    console.log(`O cliente ${nome} é um bom pagador.`)
}
else {
    console.log(`O cliente ${nome} NÃO é bom pagador.`)
}

console.log("O cliente " + nome + (ehBomPagador ? " é bom pagador." : " não é bom pagador"))

if (idade >= 18 && idade <= 25) {
    taxaDeJuros = 0.09
}
else if (idade >= 26 && idade <= 35) {
    taxaDeJuros = 0.08
}
else if (idade >= 36 && idade <= 50) {
    taxaDeJuros = 0.07
}
else {
    taxaDeJuros = 0.06
}

console.log(taxaDeJuros)
