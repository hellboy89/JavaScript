function calculaMedia(num1, num2, num3) {
    let media = (num1 + num2 + num3) / 3;
    return media
}

console.log(calculaMedia(7,8,9))
console.log(calculaMedia(5,5,5))
console.log(calculaMedia(10,20,30))

// Também pode ser como abaixo, colocando a saída numa variável.
teste = calculaMedia(10,5,2)
console.log(teste.toFixed(2))
