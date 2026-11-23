
import { useState, useEffect } from "react";
import { api } from "../services/api";

export const usePokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function fetchPokemon() {

            try {
                setLoading(true);
                setError(null);

                const response = await api.get("/pokemon?limit=20");

                const detailsRequests = response.data.results.map((item) =>
                    api.get(item.url)
                );

                const detailsResponses = await Promise.all(detailsRequests);

                const pokemonData = detailsResponses.map((res) => ({
                    id: res.data.id,
                    name: res.data.name,
                    image: res.data.sprites.other["official-artwork"].front_default,
                    types: res.data.types.map((type) => type.type.name),
                }));

                setPokemon(pokemonData);

            } catch (err) {
                setError("Erro ao carregar os Pokémon.");

            } finally {
                setLoading(false);
            }
        }

        fetchPokemon();

    }, []);

    return {
        pokemon,
        loading,
        error
    };
};
