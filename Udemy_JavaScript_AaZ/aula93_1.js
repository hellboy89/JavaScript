// Usando múltiplos Catch no tratamento de erros.

try {
    let num = 1
    num.toUpperCase()
}
catch(erro) {
    if (erro instanceof TypeError) {
        console.log("TypeError")
    }
    else if (erro instanceof ReferenceError) {
        console.log("ReferenceError")
    }
}

