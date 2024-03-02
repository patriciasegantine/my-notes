import styled from "styled-components";

export const TextAreaContainer = styled.div`
  p {
    text-align: end;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    font-size: ${({theme}) => theme.FONT.EXTRA_SMALL};
  }
`

export const TextAreaContent = styled.div`

  width: 100%;
  display: flex;
  align-items: center;

  background: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.GRAY_300};

  margin-bottom: ${({theme}) => theme.SPACING.EXTRA_SMALL};
  border-radius: ${({theme}) => theme.BORDER.RADIUS_REGULAR};

  textarea {
    width: 100%;

    resize: none;

    padding: ${({theme}) => theme.SPACING.SMALL};

    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }

  svg {
    margin-left: ${({theme}) => theme.SPACING.SMALL};
  }

`
