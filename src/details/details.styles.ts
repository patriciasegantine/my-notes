import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:"header" "content";

  main {
    grid-area: content;
    overflow-y: scroll;
    padding-top: ${({theme}) => theme.SPACING.GIANT};
  }

`

export const DetailsContent = styled.div`
  width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  button:first-child {
    align-self: end;
  }

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
