import styled, { css } from "styled-components";
import { SingInContainer } from "../sign-in/sign-in.styles.ts";

export const HomeContainer = styled(SingInContainer)<{ $mobile_size: string }>`
  position: relative;

  background: ${({theme}) => theme.COLORS.BACKGROUND_800};

  display: grid;
  grid-auto-columns: 250px auto;
  grid-template-rows: 105px 128px auto;
  grid-template-areas:
    "menu header"
    "menu search"
    "menu content";

  ${(props) => props.$mobile_size === 'true' && css`
    grid-auto-columns: auto;
    grid-template-areas:
    "header"
    "search"
    "content";
  `
  }
`

export const Menu = styled.div<{ $mobile_size: string }>`

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

export const Search = styled.div`
  grid-area: search;
  padding: ${({theme}) => theme.SPACING.REGULAR};
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 ${({theme}) => theme.SPACING.REGULAR};
  overflow-y: auto;
`

export const Button = styled.button`
  grid-area: newNote;
  background: ${({theme}) => theme.COLORS.HIGHLIGHT};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  font-weight: 500;

  border: none;
`
