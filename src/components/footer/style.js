
import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    background: ${({ theme }) => theme.colors.headerFooterBg};
    color: ${({ theme }) => theme.colors.headerText};
    padding: ${({ theme }) => theme.spacing.lg};
    margin-top: ${({ theme }) => theme.spacing.xxl};
`;

export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        text-align: center;
    }
`;

export const FooterText = styled.p`
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: #CBD5E1;
`;

export const FooterLink = styled.a`
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.headerText};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;
