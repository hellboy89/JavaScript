function teste() {
    console.log("ola")
}

function diga_ola() {
    console.log("ola")
}

function digaNome(nome, sobrenome, idade, altura) {
    if (idade < 18) {
        status = "menor de idade"
    }
    else {
        status = "maior de idade"
    }

    console.log(nome + " " + sobrenome + " que tem " + altura + " é " + status)

}

// digaNome("Juan", "Cleber", 32, "1.90")

function usandoRepeticao1() {
    contador = 0
    while (true) {
        contador++
        console.log(contador)

        if (contador == 10) {
            break
        }
    }
}

function naoPularLinha(num) {
    var contador = num + 1
    while (true) {
        contador--
        console.error(contador,)
        if (contador == 0) {
            break
        }
    }
}

naoPularLinha(35)
