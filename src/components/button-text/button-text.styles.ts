import styled from "styled-components";

export const ButtonTextContainer = styled.button`
  background: none;
  color: ${({theme}) => theme.COLORS.HIGHLIGHT};

  border: none;
  font-size: ${({theme}) => theme.FONT.PARAGRAPH};
`
