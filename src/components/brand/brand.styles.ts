import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { TBrand } from "./brand.tsx";

export const BrandContainer = styled(Link)`

    display: flex;
    justify-content: center;
    align-content: center;

    color: ${({theme}) => theme.COLORS.HIGHLIGHT};
    font-family: "Kodchasan", sans-serif;
    font-size: ${({theme}) => theme.FONT.LARGE};

    &:hover {
        opacity: .8;
    }
`

export const BrandContent = styled.button<{ size: TBrand }>`


    color: ${({theme}) => theme.COLORS.HIGHLIGHT};
    font-family: "Kodchasan", sans-serif;
        //font-size: ${({theme}) => theme.FONT.LARGE};

    border: none;
    background: none;


    ${({size}) => size === 'small' && css`
        font-size: ${({theme}) => theme.FONT.SMALL}
    `}

    ${({size}) => size === 'medium' && css`
        font-size: ${({theme}) => theme.FONT.MEDIUM}
    `}

    ${({size}) => size === 'large' && css`
        font-size: ${({theme}) => theme.FONT.LARGE}
    `}
`
