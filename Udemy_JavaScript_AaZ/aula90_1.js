// Testando try, catch e finally.

try {
    let nome = "Manuel"
    cnome.toUpperCase()
}
catch(erro) {
    console.log(erro)
    console.log(erro.name)
    console.log(erro.message)
}
finally {
    console.log("Fim da instrução try/catch/finally.")
}

