
import * as S from "./style";

export function PokemonCard({ pokemon }) {
    return (
        <S.PokemonCardContainer>

            <S.PokemonId>
                #{String(pokemon.id).padStart(3, "0")}
            </S.PokemonId>

            <S.PokemonImage
                src={pokemon.image}
                alt={pokemon.name}
            />

            <S.PokemonName>
                {pokemon.name}
            </S.PokemonName>

            <S.PokemonTypes>
                {pokemon.types.map((type) => (
                    <S.PokemonType key={type}>
                        {type}
                    </S.PokemonType>
                ))}
            </S.PokemonTypes>

        </S.PokemonCardContainer>
    );
}
