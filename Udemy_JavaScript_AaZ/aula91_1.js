// Usando o throw para gerar meus próprios erros tratados.

function soma(num1, num2) {
    if(typeof num1 !== "number" || typeof num2 !== "number") {
        throw TypeError("Os argumentos devem ser um número.")
    }
    
    return num1 + num2
}

try {
    console.log(soma("teste",20))
}
catch(erro) {
    console.log(erro.message)
}

