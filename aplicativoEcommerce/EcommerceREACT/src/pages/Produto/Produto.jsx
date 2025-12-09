import { useContext, useState } from "react";
import { ProdutoContext } from "../../context/produtoContext";
import { useParams, useNavigate } from "react-router-dom";
import { addCarrinho } from "../../api/itensCarrinho";
import "./produto.css";
import { toggleFavoritar } from "../../api/favoritos";
import { FavoritoContext } from "../../context/favoritoContext";

export default function Produto() {
    const { favoritos, setFavoritos, loadingFavoritos } = useContext(FavoritoContext);
    const { produtos, erro } = useContext(ProdutoContext);

    const navigate = useNavigate();
    const { id } = useParams();

    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");

    const produto = produtos.find(p => p.id == id);

    if (erro) return <p>{erro}</p>;
    if (!produtos.length) return <p>Carregando...</p>;
    if (!produto) return <p>Produto não encontrado.</p>;

    const isFavorito = favoritos.includes(produto.id);

    async function handleFavoritar() {
        const token = localStorage.getItem("token");

        if (!token) {
            return navigate("/login");
        }

        setFavoritos(prev =>
            prev.includes(produto.id)
                ? prev.filter(fid => fid !== produto.id)
                : [...prev, produto.id]
        );

        try {
            await toggleFavoritar(produto.id, token);
        } catch (err) {
            console.error(err);

            setFavoritos(prev =>
                prev.includes(produto.id)
                    ? prev.filter(fid => fid !== produto.id)
                    : [...prev, produto.id]
            );
        }
    }

    async function handleAddCarrimho() {
        const token = localStorage.getItem("token");

        if (!token) {
            setMensagem("Você precisa estar logado para adicionar ao carrinho!");
            setTipoMensagem("erro");
            return;
        }

        try {
            await addCarrinho(produto.id, token);
            setMensagem("Item adicionado ao carrinho!");
            setTipoMensagem("sucesso");
        } catch (erro) {
            console.error(erro);
            setMensagem("Erro ao adicionar ao carrinho.");
            setTipoMensagem("erro");
        }
    }

    return (
        <div className="div-pai-produtos">
            <img src={produto.imagem} className="imagem-produto" />

            <div>
                <div className="titulo-icone">
                    <div className="div-filho-produtos">
                        <i
                            onClick={handleFavoritar}
                            className={`icone-fav ${isFavorito ? "fa-solid" : "fa-regular"} fa-heart`}
                        ></i>
                    </div>

                    <h1 className="titulo-produto">{produto.nome}</h1>
                </div>

                <div className="preco-produto">
                    <p className="h2-preco-produto">R${produto.preco}</p>
                </div>

                <div className="div-botoes">
                    <button className="botao-comprar">Compre Agora</button>

                    <button className="botao-adicionar-carrinho" onClick={handleAddCarrimho}>
                        Adicionar Ao Carrinho
                        <i className="fa-solid fa-cart-plus"></i>
                    </button>
                </div>

                {mensagem && (
                    <p className={tipoMensagem === "sucesso"
                        ? "mensagem-produto-sucesso"
                        : "mensagem-produto-erro"}
                    >
                        {mensagem}
                    </p>
                )}

                <div className="paragrafo-produto">
                    <p className="paragrafo-produto">{produto.descricao}</p>
                </div>
            </div>
        </div>
    );
}
