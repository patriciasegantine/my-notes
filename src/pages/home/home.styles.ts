import styled, { css } from "styled-components";
import { ButtonTextContainer } from "../../components/button-text/button-text.styles.ts";

export const HomeContainer = styled.div<{ $mobile: string }>`
  position: relative;

  width: 100%;
  height: 100vh;

  background: ${({theme}) => theme.COLORS.BACKGROUND_800};

  display: grid;
  grid-auto-columns: 250px auto;
  grid-template-rows: 105px 128px auto;
  grid-template-areas:
    "menu header"
    "menu search"
    "menu content";

  ${(props) => props.$mobile === 'true' && css`
    grid-auto-columns: auto;
    grid-template-areas:
    "header"
    "search"
    "content";
  `
  }
`

export const Menu = styled.div<{ $mobile_size: string, $show_mobile: string }>`

  grid-area: menu;
  background: ${({theme}) => theme.COLORS.BACKGROUND_900};
  display: ${({$mobile_size}) => $mobile_size === 'true' ? 'none' : 'grid'};
  grid-auto-columns: auto;
  grid-template-rows: 105px auto 60px;
  position: initial;

  grid-template-areas:
    "brand"
    "nav"
    "newNote";

  ${(props) => props.$show_mobile === 'true' && css`
    position: absolute;
    display: grid;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
  `}
`

export const Brand = styled.div`
  grid-area: brand;
  background: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.HIGHLIGHT};

  height: 105px;

  font-family: "Kodchasan", sans-serif;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`

export const ButtonClose = styled(ButtonTextContainer)`
  position: absolute;
  right: 10px;
  top: 10px;
`

export const Search = styled.div`
  grid-area: search;
  padding: ${({theme}) => theme.SPACING.REGULAR};
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 ${({theme}) => theme.SPACING.REGULAR};
  overflow-y: scroll;
`

export const Button = styled.div`
  grid-area: newNote;
  background: ${({theme}) => theme.COLORS.HIGHLIGHT};

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    font-weight: 500;
  }
`
