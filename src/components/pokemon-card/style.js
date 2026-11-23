
import styled from "styled-components";

export const PokemonCardContainer = styled.article`
    background: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.borderRadius.card};
    padding: ${({ theme }) => theme.spacing.lg};
    text-align: center;
    box-shadow: ${({ theme }) => theme.boxShadow.card};
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 260px;
`;

export const PokemonId = styled.span`
    display: block;
    text-align: right;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const PokemonImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: contain;
    margin: 0 auto;
`;

export const PokemonName = styled.h2`
    text-transform: capitalize;
    margin: ${({ theme }) => theme.spacing.sm} 0;
`;

export const PokemonTypes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
    flex-wrap: wrap;
`;

export const PokemonType = styled.span`
    background: ${({ theme }) => theme.colors.background};
    padding: 5px 12px;
    border-radius: 20px;
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    text-transform: capitalize;
`;
