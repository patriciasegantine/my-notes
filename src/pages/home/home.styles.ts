import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-auto-columns: 220px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newNote content";
  background: ${({theme}) => theme.COLORS.BACKGROUND_800};
`

export const Brand = styled.div`
  grid-area: brand;
  background: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.HIGHLIGHT};

  font-family: "Kodchasan", sans-serif;
  border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: center;
`
export const Menu = styled.ul`
  grid-area: menu;
  background: ${({theme}) => theme.COLORS.BACKGROUND_900};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: ${({theme}) => theme.SPACING.GIANT};

  li {
    list-style: none;
  }
`
export const Search = styled.div`
  grid-area: search;
`

export const HomeContent = styled.div`
  grid-area: content;
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
