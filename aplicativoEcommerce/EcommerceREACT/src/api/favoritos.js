import { API_Favorito } from "./config";

export async function toggleFavoritar(produtoId, token) {
    const resposta = await fetch(`${API_Favorito}/${produtoId}`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    if (!resposta.ok) {
        throw new Error("Erro ao favoritar");
    }

    return await resposta.json();
}

export async function getFavoritos(token) {
    const resposta = await fetch(API_Favorito, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    if (!resposta.ok) {
        throw new Error("Erro ao buscar favoritos");
    }

    return resposta.json();
}