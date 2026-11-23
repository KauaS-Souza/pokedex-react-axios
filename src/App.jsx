
import { usePokemon } from "./hooks/usePokemon";

import { Header } from "./components/header";
import { PokemonCard } from "./components/pokemon-card";
import { PokemonGridContainer } from "./components/pokemon-grid/style";
import { Footer } from "./components/footer";

export default function App() {

    const { pokemon, loading, error } = usePokemon();

    return (
        <>
            <Header />

            {loading && <p>Carregando Pokémon...</p>}

            {error && <p>{error}</p>}

            {!loading && !error && (
                <PokemonGridContainer>
                    {pokemon.map((item) => (
                        <PokemonCard
                            key={item.id}
                            pokemon={item}
                        />
                    ))}
                </PokemonGridContainer>
            )}

            <Footer />
        </>
    );
}
