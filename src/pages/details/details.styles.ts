import styled from "styled-components";
import { FullWidthContainer } from "../../global.styles.ts";

export const DetailsContainer = styled(FullWidthContainer)``

export const DetailsContent = styled.div`

    max-width: 800px;
    margin: 0 auto;
    padding-top: ${({theme}) => theme.SPACING.REGULAR};
    padding-bottom: ${({theme}) => theme.SPACING.REGULAR};

    display: flex;
    flex-direction: column;


    h1 {
        font-weight: 500;
        font-size: ${({theme}) => theme.FONT.GIANT};
        padding-top: ${({theme}) => theme.SPACING.GIANT};
        padding-bottom: ${({theme}) => theme.SPACING.MEDIUM};
    }

    p {
        font-size: ${({theme}) => theme.FONT.PARAGRAPH};
        margin-top: ${({theme}) => theme.SPACING.SMALL};
        line-height: ${({theme}) => theme.FONT.LARGE};
    }
`

export const TagsSection = styled.div`
    margin-bottom: ${({theme}) => theme.SPACING.GIANT};
`

export const Links = styled.ul`
    list-style: none;

    li {
        margin-top: ${({theme}) => theme.SPACING.SMALL};
    }

    a {
        color: ${({theme}) => theme.COLORS.WHITE};
    }
`

export const DetailContainerButton = styled.div`
    display: flex;
    gap: ${({theme}) => theme.SPACING.SMALL};

    button:nth-child(2):hover {
        color: red;
    }
`
