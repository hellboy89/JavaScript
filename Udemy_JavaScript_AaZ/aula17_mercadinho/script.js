let nomeProd = "Toddy"
let preco = 6.99
let validade = true

let nome = document.getElementById('nome')
let precoHtml = document.getElementById('preco')
let val = document.getElementById('validade')

//let nomeVar = String(nome.value)

nome.innerHTML = `Nome: ${nomeProd}`
precoHtml.innerHTML = `Preço: R$ ${preco}`
val.innerHTML = `Validade: ${validade}`

