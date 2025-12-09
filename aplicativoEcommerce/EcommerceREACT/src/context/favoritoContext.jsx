import { createContext, useState, useEffect } from "react";
import { getFavoritos } from "../api/favoritos";

export const FavoritoContext = createContext();

export function FavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState([]);
    const [loadingFavoritos, setLoadingFavoritos] = useState(true);

    useEffect(() => {
        async function carregarFavoritos() {
            const token = localStorage.getItem("token");

            if (!token) {
                setLoadingFavoritos(false);
                return;
            }

            const resposta = await getFavoritos(token);
            setFavoritos(resposta.map(f => f.id));
            setLoadingFavoritos(false);
        }

        carregarFavoritos();
    }, []);

    return (
        <FavoritoContext.Provider value={{ favoritos, setFavoritos, loadingFavoritos }}>
            {children}
        </FavoritoContext.Provider>
    );
}
