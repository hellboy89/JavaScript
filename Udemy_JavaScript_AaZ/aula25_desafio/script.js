let nota1 = document.getElementById('nota1')
let nota2 = document.getElementById('nota2')
let nota3 = document.getElementById('nota3')
let nota4 = document.getElementById('nota4')
let media = document.getElementById('media')

let _nota1 = 7
let _nota2 = 8
let _nota3 = 9
let _nota4 = 8
let _media = (_nota1 + _nota2 + _nota3 + _nota4) / 4

nota1.innerHTML = `1 Bim: ${_nota1}`
nota2.innerHTML = `2 Bim: ${_nota2}`
nota3.innerHTML = `3 Bim: ${_nota3}`
nota4.innerHTML = `4 Bim: ${_nota4}`
media.innerHTML = `Média: ${_media}`
