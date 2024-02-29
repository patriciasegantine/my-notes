import styled from "styled-components";

export const TagContainer = styled.span`

  font-size: ${({theme}) => theme.FONT.SMALL};
  padding: 5px 14px;
  border-radius: ${({theme}) => theme.BORDER.RADIUS_SMALL};
  margin-right: ${({theme}) => theme.SPACING.EXTRA_SMALL};
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  background: ${({theme}) => theme.COLORS.HIGHLIGHT};
`
