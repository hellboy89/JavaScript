function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    }
    else {
        return 'Impar!'
    }
}

// Se quiser possível jogar a saída dentro de uma variável.
let res = parimpar(4)
console.log(res)

// Também pode escrever diretamente sem colocar na variável, como abaixo.
console.log(parimpar(3))

