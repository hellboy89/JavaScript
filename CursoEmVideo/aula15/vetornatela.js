let vetores = [8, 1, 7, 4, 2, 9]
vetores.sort()

console.log('Usando FOR antigo')
for (i = 0 ; i < vetores.length ; i++) {
    console.log(`${vetores[i]}`)
}

// Segunda forma de fazer

console.log('Usando novo FOR')
for (let pos in vetores) {
    console.log(`${vetores[pos]}`)
}
