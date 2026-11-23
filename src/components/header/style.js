
import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    background: ${({ theme }) => theme.colors.headerFooterBg};
    color: ${({ theme }) => theme.colors.headerText};
    padding: ${({ theme }) => theme.spacing.xl};
`;

export const HeaderContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const HeaderTitle = styled.h1`
    font-size: ${({ theme }) => theme.typography.fontSize.xxl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const HeaderDescription = styled.p`
    margin-top: ${({ theme }) => theme.spacing.xs};
    color: #CBD5E1;
    font-size: ${({ theme }) => theme.typography.fontSize.md};
`;
