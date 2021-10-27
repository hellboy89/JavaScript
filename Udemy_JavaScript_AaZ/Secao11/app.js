
const paleta1 = document.getElementById("paleta1", Number)
const paleta2 = document.getElementById("paleta2", Number)
const paleta3 = document.getElementById("paleta3")
const classPaleta = document.getElementsByClassName("paleta")

const paleta1_query = document.querySelector("#paleta1")

// Abaixo uma forma de testar se foi pego o Tag HTML de forma correta.
console.log(paleta1)
console.log(paleta2)
console.log(paleta3)

console.log(classPaleta[0])
console.log(classPaleta[1])
console.log(classPaleta[2])

// Acessando os filhos da classe

const paletas_div = document.querySelector(".paletas_div")
console.log(paletas_div.children)
console.log(typeof(paletas_div))

// Criando elementos
const titulo = document.createElement("h1")
titulo.textContent = "To Do List"
console.log(titulo)

// Inserindo elementos no HTML a partir do javascript.
const body = document.querySelector("body")
body.insertBefore(titulo, paletas_div)

// Irá adicionar uma nova div ao fim do arquivo.
const paleta4 = document.createElement("div")
paletas_div.append(paleta4)
console.log(paletas_div)

// Adicionando uma nova propriedade ao elemento criado, no caso o div acima.
paleta4.classList.add("paleta")

