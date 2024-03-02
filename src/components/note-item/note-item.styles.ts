import styled from "styled-components";

export const NoteItemContainer = styled.div<{ $is_new: string }>`

  display: flex;
  align-items: center;

  background: ${({theme, $is_new}) => $is_new === 'true'
          ? 'transparent'
          : theme.COLORS.BACKGROUND_900};

  color: ${({theme, $is_new}) => $is_new === 'true'
          ? theme.COLORS.GRAY_300
          : theme.COLORS.WHITE};

  border: ${({theme, $is_new}) => $is_new === 'true'
          ? `1px dashed ${theme.COLORS.GRAY_300}`
          : 'none'};

  margin-bottom: ${({theme}) => theme.SPACING.EXTRA_SMALL};
  border-radius: ${({theme}) => theme.BORDER.RADIUS_REGULAR};
  padding-right: ${({theme}) => theme.SPACING.SMALL};

  > button {
    border: none;
    background: none;
  }

  > input {
    width: 100%;

    padding: ${({theme}) => theme.SPACING.SMALL};

    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300};

    }

  }

  svg {
    color: ${({theme, $is_new}) => $is_new === 'true'
            ? theme.COLORS.HIGHLIGHT
            : theme.COLORS.RED};
  }

`
