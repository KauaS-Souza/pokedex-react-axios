
import * as S from "./style";

export function Footer() {
    return (
        <S.FooterContainer>
            <S.FooterContent>
                <S.FooterText>
                    PokéDex Explorer © {new Date().getFullYear()}
                </S.FooterText>

                <S.FooterLink
                    href="https://pokeapi.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Desenvolvido com PokéAPI
                </S.FooterLink>
            </S.FooterContent>
        </S.FooterContainer>
    );
}
