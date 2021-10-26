let nome = document.querySelector('input#nome')
let email = document.querySelector('input#email')
let senha = document.querySelector('input#password')
let resultado = document.querySelector('h3#resultado')

function verifica() {

    const dadosRecebidos = {
        _nome: String(nome.value),
        _email: String(email.value),
        _senha: Number(senha.value)
    }

    const dadosCorretos = {
        nomeCorreto: "Juan",
        emailCorreto: "juan.fsj@gmail.com",
        senhaCorreta: 4011
    }

    if (dadosRecebidos._nome == dadosCorretos.nomeCorreto || dadosRecebidos._email == dadosCorretos.emailCorreto || dadosRecebidos._senha === dadosCorretos.senhaCorreta) {
        resultado.innerHTML = "Informações Corretas"
    }
    else {
        resultado.innerHTML = "Informações Incorretas"
    }

    /*
    for (const [chave, valor] of Object.entries(dadosCorretos)) {
        resultado.innerHTML += `${chave}: ${valor}<br/>`
    }

    for (const [chave, valor] of Object.entries(dadosRecebidos)) {
        resultado.innerHTML += `${chave}: ${valor}<br/>`
    }
    */

}

function limpar() {

    nome.value = ""
    email.value = ""
    senha.value = ""
    resultado.innerHTML = "Resultado"
    resultado.focus()

}

function preencher() {
 
    nome.value = "Juan"
    email.value = "juan.fsj@gmail.com"
    senha.value = 4011
    
}

