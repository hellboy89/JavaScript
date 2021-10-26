// Testando uso de funções dentro dos objetos.

const consolee = {
    logg: function(logg) {
        return `${console.log(logg)}`
    }
}


consolee.logg("vamos fazer da maneira correta")


