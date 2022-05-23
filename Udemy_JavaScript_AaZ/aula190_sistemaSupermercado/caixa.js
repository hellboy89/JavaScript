import Carrinho from "./carrinho";
import Produto from "./produtos/produto";

const nomeProduto = document.querySelector("#nomeProd");
const valorProduto = document.querySelector("#valorProd");
const tipoProduto = document.querySelector("#tipoProd");
const codigoProduto = document.querySelector("#codigoProd");
const dataProduto = document.querySelector("#dataProd");
const botaoAdd = document.querySelector("#adiconarProd");
const botaoRemove = document.querySelector("#removaProd");
const botaoDesconto = document.querySelector("#aplicaDesconto");
const valorTotal = document.querySelector("#valorTotal");
const valorFinal = document.querySelector("#valorFinal");
const listaProd = document.querySelector(".lista_prod");
const carrinho = new Carrinho();

botaoAdd.addEventListener('click', () => adicionaProduto());
botaoRemove.addEventListener('click', () => removeProduto());
botaoDesconto.addEventListener('click', () => aplicaDesconto());
tipoProduto.addEventListener('input', () => flagDataValidade());

function criaProduto() {
    let produto = new Produto(nomeProduto.value, Number(valorProduto.value), codigoProduto.value, tipoProduto.value);
    return produto;
}

function adicionaProduto() {
    const produto = criaProduto();
    carrinho.adicionarProduto(produto);
    exibeProdutos();
    atualizaValorTotal();
}

function atualizaValorTotal() {
    valorTotal.textContent = `Valor Total: R$ ${carrinho.valor}`;
}

function exibeProdutos() {
    let saida = "";
    carrinho.listaDeProdutos.forEach((produto) => {
        saida += `<div class="produto"><p >${produto.nome}</p><p>${produto.tipo}</p><p>${produto.valor}</p></div>`
    });
    listaProd.innerHTML = saida;
}

function flagDataValidade() {
    if (document.querySelector("#tipoProd").value === "alimentacao") {
        document.querySelector("#dataProd").style.display = "block";
    } else {
        document.querySelector("#dataProd").style.display = "none";
    }
}


