const clientes = [["manuel", 24, true], ["Edvaldo", 24, false], ["Raphael", 19, true]]

//console.table(clientes)

console.log(clientes[1][0])
console.log(clientes[1][1])

clientes.push(["Bruna", 27, false])
clientes.unshift(["Juan", 31, true])

console.table(clientes)
