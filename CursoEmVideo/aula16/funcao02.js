// Esses valores abaixo "n1=0" significa se eu não passar nenhum valor, será 0.
// Caso contrário irá dar um erro de NaN (Not a Number).

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2, 10))

console.log(soma(10))

