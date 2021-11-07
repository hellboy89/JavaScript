function exibeNome(nome, callback) {
    setTimeout(() => {
        console.log(nome)
        callback()
    }, 1500)
}

console.log("Olá, ");
exibeNome("Juan", function() {
    console.log("Cleber")
})

