import styled from "styled-components";

export const InputContainer = styled.div`

  width: 100%;
  display: flex;
  align-items: center;

  background: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.GRAY_300};

  margin-bottom: ${({theme}) => theme.SPACING.EXTRA_SMALL};
  border-radius: ${({theme}) => theme.BORDER.RADIUS_REGULAR};

  input {
    height: 56px;
    width: 100%;

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
