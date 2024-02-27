import styled from "styled-components";

export const NotesContainer = styled.div`

  width: 100%;
  background: ${({theme}) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: ${({theme}) => theme.BORDER.RADIUS_REGULAR};
  padding: ${({theme}) => theme.SPACING.MEDIUM};
  margin-bottom: ${({theme}) => theme.SPACING.SMALL};


  h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: ${({theme}) => theme.FONT.LARGE};
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  footer {
    width: 100%;
    display: flex;
    margin-top: ${({theme}) => theme.SPACING.MEDIUM};
  }
`
