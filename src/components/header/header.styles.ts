import styled from "styled-components";

export const HeaderContainer = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 ${({theme}) => theme.SPACING.GIANT};
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.SPACING.EXTRA_SMALL};
`

export const ImageContainer = styled.div`

  img {
    width: 56px;
    height: 56px;
    border-radius: 50px;
  }
`
export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: ${({theme}) => theme.FONT.LINE_HEIGHT_SMALL};

  span {
    font-size: ${({theme}) => theme.FONT.SMALL};
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  strong {
    font-size: ${({theme}) => theme.FONT.MEDIUM};
    color: ${({theme}) => theme.COLORS.WHITE};
  }
`

export const Logout = styled.button`
  background: none;
  border: none;

  svg {
    font-size: ${({theme}) => theme.FONT.LARGE};
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }
`
