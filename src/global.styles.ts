import styled, { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }

  body {
    background: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;;
  }

  body, input, button, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.7);
  }

  // scroll

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: ${({theme}) => theme.BORDER.RADIUS_REGULAR};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.COLORS.GRAY_300};
    border-radius: ${({theme}) => theme.BORDER.RADIUS_REGULAR};
  }

  &::-webkit-scrollbar-track {
    background-color: ${({theme}) => theme.COLORS.GRAY_100};
    border-radius: ${({theme}) => theme.BORDER.RADIUS_REGULAR};
  }
`

export const FullWidthContainer = styled.div`
  width: 100%;
  height: 100vh;
`
