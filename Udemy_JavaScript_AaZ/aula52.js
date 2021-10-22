// Função abaixo conhecida como Arrow Function.

const media = (num1=0, num2=0, num3=0) => {
    let mediaNum = (num1 + num2 + num3) / 3
    return mediaNum
}

console.log(media(7,8,9))
console.log(media(10,30).toFixed(2))
