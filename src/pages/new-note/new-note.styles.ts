import styled from "styled-components";
import { FullWidthContainer } from "../../global.styles.ts";

export const NewNoteContainer = styled(FullWidthContainer)``

export const NewNoteContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

export const NewNoteTitles = styled.h1`
  margin-top: ${({theme}) => theme.SPACING.EXTRA_GIANT};
  margin-bottom: ${({theme}) => theme.SPACING.REGULAR};
`

export const Form = styled.form``

export const TagsSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: ${({theme}) => theme.SPACING.EXTRA_SMALL};

  > div {
    width: 48%;
  }

`
