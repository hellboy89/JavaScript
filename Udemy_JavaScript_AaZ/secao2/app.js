/*
Sistema de Cadastro
*/

let nome
let sobrenome
let idade
let valorEmpretimo
let taxaDeJuros
let numAnos
let ehBomPagador

const numClient = 095864

// Nesse caso como a variável já foi declarada mais acima, não é necessário usar o "let"
// novamente, basta colocar o nome da variável e inserir o novo valor, que irá substituir.
idade = 33



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
/*
for(let cont = 0; cont < 3; cont++) {
    valorEmpretimo = parseInt(prompt("Digite o valor do empréstimo: "))
    numAnos = parseInt(prompt("Digite o número de anos: "))
    juros = valorEmpretimo * taxaDeJuros * numAnos
    montante = valorEmpretimo + juros
    console.log(montante);
    
}
*/

while (true) {
    valorEmpretimo = parseInt(prompt("Insira um valor do empréstimo: "))
    if (valorEmpretimo == 0) {
        console.log('Encerrando...')
        break
    }
    numAnos = parseInt(prompt("Insira o número de anos: "))
    juros = valorEmpretimo * taxaDeJuros * numAnos
    montante = valorEmpretimo + juros
    console.log(montante)
} 
