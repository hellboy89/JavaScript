class CadastroEscolar {
    foto;
    nome;
    sobrenome;
    idade;

    constructor(foto, nome, sobrenome, idade) {
        this.foto = foto;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    saudacao() {
        console.log(`ola ${this.nome} ${this.sobrenome}, que tem ${this.idade} anos`)
    }
}

const juan = new CadastroEscolar("Juan", "Cleber", 32);
const cleber = new CadastroEscolar("Cleber", "Vieira", 69);
const denise = new CadastroEscolar("Denise", "Da Rocha", 64);

console.log(juan);
juan.saudacao();
console.log(cleber);
cleber.saudacao();
console.log(denise);
denise.saudacao();
