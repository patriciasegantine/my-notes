import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:"header" "content";

  main {
    grid-area: content;
    overflow-y: auto;
    padding-top: ${({theme}) => theme.SPACING.GIANT};
  }

`
