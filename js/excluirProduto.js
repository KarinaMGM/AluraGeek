import { conectaApi } from "./conectaApi.js";

async function excluirProduto(excluirId) {
    try {
        await conectaApi.excluirProduto(excluirId);
        alert ("Produto excluido!");
    } catch(error){
        console.error ("Falha ao excluir o produto", error);

        window.location.reload(true);
    }
}

export {excluirProduto};
