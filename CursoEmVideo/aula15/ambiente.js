let num = [5, 8, 2, 9, 3]


// Com a linha abaixo eu adiciono mais um valor na lista.
num[5] = 10

// Com o push ele adiciona um novo elemento no último índice.
num.push(7)
num.push(16)

// Saber o comprimento da lista.
console.log(num.length)

// Mostrando valores isolados.
console.log(`O valor separado é ${num[5]}`)

// Com a linha abaixo é ordenador por valor crescente.
num.sort()
console.log(`Nosso vetor é o ${num}`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}.`)

// Se caso o valor não existir, será retornado o "-1"
let pos2 = num.indexOf(33)
console.log(pos2)

// Se quiser filtrar a saída para não mostrar o -1.
if (pos2 == -1) {
    console.log('Valor não encontrado')
}
else {
    console.log(`O valor está na posição ${pos2}`)
}
