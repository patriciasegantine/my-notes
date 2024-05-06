import styled, { css } from "styled-components";

export const AsideContainer = styled.div<{ $mobile_size: string, $show_menu_mobile: string }>`

    grid-area: menu;
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
    display: ${({$mobile_size}) => $mobile_size === 'true'
            ? 'none'
            : 'grid'};
    grid-auto-columns: auto;
    grid-template-rows: 105px auto 60px;
    position: initial;

    grid-template-areas:
    "brand"
    "nav"
    "newNote";

    ${({$show_menu_mobile}) => $show_menu_mobile === 'true' && css`
        display: grid;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 300px;
    `}
`

export const NavContainer = styled.ul`
    grid-area: nav;

    padding-top: ${({theme}) => theme.SPACING.REGULAR};
    padding-left: ${({theme}) => theme.SPACING.SMALL};

    li {
        list-style: none;
    }
`
