import styled from "styled-components";

export const ButtonTextContainer = styled.button<{ color?: string, $active?: string }>`
  background: none;
  padding: 5px;
  border: none;

  display: flex;
  justify-content: center;
  gap: 5px;

  font-size: ${({theme}) => theme.FONT.PARAGRAPH};

  color: ${({$active, theme, color}) => $active === 'true'
          ? theme.COLORS.HIGHLIGHT
          : color};
`

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`
