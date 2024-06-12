/* CONECTA A API */
async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}


/* CRIAR OS PRODUTOS */
async function criaProduto(nome, valor, imagem, id) {
    const conexao = await fetch("http://localhost:3000/produtos", 
    {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem,
            id: id
        })
    });
    
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

/* EXCLUIR PRODUTO */
async function excluirProduto(excluirId) {
    try {
        const conexao = await fetch (`http://localhost:3000/produtos/${excluirId}`, {
            method: "DELETE",
        });
        const data = await conexao.json();
        console.log(data);
    } catch (error) {
        console.error("Falha ao excluir o produto", error);
        throw error;
    }
}


export const conectaApi = {
    listaProdutos,
    criaProduto,
    excluirProduto
}
