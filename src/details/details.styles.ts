import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:"header" "content";

`

export const DetailsContent = styled.div`
  width: 60vw;
  margin: 0 auto;
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
