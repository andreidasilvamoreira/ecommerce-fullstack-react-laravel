import { useContext, useState } from "react";
import { ProdutoContext } from "../../context/produtoContext";
import { useParams } from "react-router-dom";
import { addCarrinho } from "../../api/itensCarrinho";
import "./produto.css"

export default function Produto() {
    const { produtos, erro } = useContext(ProdutoContext);
    const { id } = useParams()
    const [coracao, setCoracao] = useState(false)
    const [mensagem, setMensagem] = useState("");

    const produto = produtos.find(p => p.id == id)

    async function handleAddCarrimho() {
        try {
            const token = localStorage.getItem("token")
            if (!token) {
                setMensagem("Você precisa estar logado para adicionar ao carrinho!")
                return;
            }
            await addCarrinho(produto.id, token)
            setMensagem("Item adicionado ao carrinho!")
        } catch (erro) {
            console.error(erro);
            setMensagem("Erro ao adicionar ao carrinho.")
        }
    }

    if (erro) return <p>{erro}</p>
    if (!produtos.length) return <p>Carregando...</p>
    if (!produto) return <p>Produto não encontrado.</p>

    return (
        <>
            <div className="div-pai-produtos">
                <img src={produto.imagem} className="imagem-produto" />

                <div >
                    <div className="titulo-icone">
                        <div className="div-filho-produtos">
                            <i onClick={() => setCoracao(!coracao)} className={`icone-fav ${coracao ? "fa-solid" : "fa-regular"} fa-heart`}
                            ></i></div>
                        <h1 className="titulo-produto">{produto.nome}</h1>
                    </div>
                    <div className="preco-produto"><p className="h2-preco-produto">R${produto.preco}</p></div>

                    <div className="div-botoes">
                        <button className="botao-comprar">Compre Agora</button>
                        <button className="botao-adicionar-carrinho" onClick={handleAddCarrimho}>Adicionar Ao Carrinho<i className="fa-solid fa-cart-plus"></i></button>
                    </div>
                    {mensagem && <p className="mensagem-produto">{mensagem}</p>}

                    <div className="paragrafo-produto"><p>{produto.descricao}</p></div>

                </div>
            </div>

        </>
    )
}