import styled from "styled-components";

export const SectionContainer = styled.section`
  margin-top: ${({theme}) => theme.SPACING.SMALL};
  margin-bottom: ${({theme}) => theme.SPACING.REGULAR};

  h2 {
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

    padding-bottom: ${({theme}) => theme.SPACING.SMALL};
    margin-bottom: ${({theme}) => theme.SPACING.MEDIUM};

    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: ${({theme}) => theme.FONT.MEDIUM};
    font-weight: 400;
  }



`
