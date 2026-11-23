import * as S from "./style";

export function Header() {
    return (
        <S.HeaderContainer>
            <S.HeaderContent>
                <S.HeaderTitle>
                    PokéDex
                </S.HeaderTitle>

                <S.HeaderDescription>
                    Explore o universo Pokémon e descubra
                    informações sobre seus Pokémon favoritos.
                </S.HeaderDescription>
            </S.HeaderContent>
        </S.HeaderContainer>
    );
}
