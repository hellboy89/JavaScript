const nomeBusca = document.querySelector(".input")
const mensagemErro = document.querySelector("#mensagemErro")
const botaoBuscar = document.querySelector("#botao_buscar")
const titulo = document.querySelector("#titulo")
const ano = document.querySelector("#ano")
const duracao = document.querySelector("#duracao")
const genero = document.querySelector("#genero")
const diretor = document.querySelector("#diretor")
const atores = document.querySelector("#atores")
const poster = document.querySelector(".poster")
const sinopse = document.querySelector("#sinopse")

const apiKey = "62665573";
const imgDefault = "./default_image.png";

async function buscaFilme(nomeBusca){
     const resposta = await fetch(`http://www.omdbapi.com/?t=${nomeBusca}&apikey=${apiKey}`);
     return resposta.json();
}

botaoBuscar .addEventListener("click", () => {
     limparCampos()
     core()
})

async function core() {
     const filme = await buscaFilme(nomeBusca.value)
     defineValores(filme);
}

function limparCampos() {
     titulo.textContent = ""
     sinopse.textContent = ""
     ano.textContent = ""
     duracao.textContent = ""
     genero.textContent = ""
     atores.textContent = ""
     poster.setAttribute("src", imgDefault)
}

