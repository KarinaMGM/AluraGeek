import { conectaApi } from "../js/conectaApi.js";
import { excluirProduto } from "../js/excluirProduto.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(nome, valor, imagem, id) {
    const produtos = document.createElement("div");
    produtos.className = "cards";

    produtos.innerHTML = `
    <div class="cards">
      <img class="img" src="${imagem}"
      alt="Funko Harry Potter" id="imagem"/>
      <h2 class="product__name">${nome}</h2>
      <div class="price-delete">    
      <p >R$ ${valor}</p>
      <input type="image" src="./assets/lixo.png" alt="ícone lixeira" id="${id}" data-excluir></input>
      </div>
    </div>`;

    return produtos;
}

async function listaProdutos() {

    try {
      
      const listaApi = await conectaApi.listaProdutos();
      if (listaApi.length > 0) {
        listaApi.forEach(elemento => {lista.appendChild(constroiCard(elemento.nome, elemento.valor, elemento.imagem, elemento.id));});
  
        const botaoExcluir = document.querySelectorAll("[data-excluir]");
        botaoExcluir.forEach(botao => {
          botao.addEventListener("click", () => excluirProduto(botao.id));
        });
      } else {
        products.innerHTML = `<h2 class="mensagem__titulo">Nenhum produto foi adicionado!</h2>`;
      }
  
      } catch {
          lista.innerHTML = `<h2 class= "mensagem__titulo">Neste momento nenhum produto foi adicionado!</h2>`
          console.error("Erro ao listar produtos", error)
      }
}

listaProdutos();


