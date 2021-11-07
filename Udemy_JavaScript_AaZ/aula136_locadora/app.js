const listaFilmes = document.querySelector("#listaFilmes")

const filmes = [
    {nome: "Godzilla", genero: "Ação"},
    {nome: "Lamb", genero: "Terror"},
    {nome: "The Trip", genero: "Comédia"}
]

const criaElementosUi = function() {
    let aux = "";
    filmes.forEach((filme) => {
        aux += `<li> Nome: ${filme.nome} Genero: ${filme.genero}`
    })
    listaFilmes.innerHTML = aux
}

function exibeFilmes() {
    setTimeout(criaElementosUi, 2000)
}

function adicionaFilme(filme, callback) {
    setTimeout(() => {
        filmes.push(filme)
        callback()
    }, 3000)
    console.log(filmes)
}

adicionaFilme({nome: "O contratempo", genero: "Suspense"}, exibeFilmes)
