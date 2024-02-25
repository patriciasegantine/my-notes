import styled from "styled-components";

export const ButtonTextContainer = styled.button<{ color: string, $active: string }>`
  background: none;
  padding: 5px;
  border: none;

  font-size: ${({theme}) => theme.FONT.PARAGRAPH};

  color: ${({$active, theme, color}) => $active === 'true'
          ? theme.COLORS.HIGHLIGHT
          : color};

`
