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

