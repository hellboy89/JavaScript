// Tratamento de erros com try e catch.

try {
    let x = 10
    console.log(x.toUpperCase())
}
catch(erro) {
    //console.log(erro)
    console.log(erro.name)
    console.log(erro.message)
}


