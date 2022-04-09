const stringTest = "Hello World"

// Verificando se a palavra Hello existe na stringTest
const regex = /Hello/

console.log(regex.test(stringTest))

const regexH = /H/
const regexl = /l/
const regexll = /ll/

console.log(regexH.test(stringTest))
console.log(regexl.test(stringTest))
console.log(regexll.test(stringTest))

const regexW = /w/i
console.log(regexW.test(stringTest))

const stringTest1 = "Exemplo: Hello World"
// Pesquisar o que começa com Hello na primeira palavra.
const regexComeco = /^Hello/
// Pesquisar o que termina com !!!
const regexFinal = /!!!$/

console.log(regexComeco.test(stringTest1))
console.log(regexFinal.test(stringTest1))