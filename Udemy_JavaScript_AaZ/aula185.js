class CadastroEscolar {
    foto;
    nome;
    sobrenome;
    idade;
    #cpf;

    constructor(foto, nome, sobrenome, idade, cpf) {
        this.foto = foto;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        // O simbolo # abaixo significa que o valor é privado.
        this.#cpf = cpf;
    }

    saudacao() {
        console.log(`ola ${this.nome} ${this.sobrenome}, que tem ${this.idade} anos`)
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(novoCPF) {
        this.#cpf = novoCPF;
    }
}

const juan = new CadastroEscolar("Juan", "Cleber", 25, 13673141783);

console.log(juan);
juan.cpf = 11111111111;
console.log(juan.cpf);
juan.saudacao();
