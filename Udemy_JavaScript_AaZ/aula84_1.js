// Desestruturação de objetos

const carros = [
    {nome: "Fiesta", marca: "Ford", cor: "Amarelo"},
    {nome: "Uno", marca: "Fiat", cor: "Preto"},
    {nome: "Gol", marca: "VW", cor: "Branco"}
]

const nomes = carros.map(({nome}) => nome)
console.log(nomes)
