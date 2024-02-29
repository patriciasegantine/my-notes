import styled from "styled-components";
import User from '../../assets/user.svg'

export const HeaderContainer = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 ${({theme}) => theme.SPACING.REGULAR};
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme}) => theme.SPACING.EXTRA_SMALL};

  cursor: pointer;

  &:hover {
    filter: brightness(.8);
  }
`

export const ImageContainer = styled.div`
  background: url(${User}) no-repeat center center;
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    border-radius: 50px;
    object-fit: cover;
  }
`
export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: ${({theme}) => theme.FONT.LINE_HEIGHT_SMALL};

  span {
    font-size: ${({theme}) => theme.FONT.EXTRA_SMALL};
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  strong {
    font-size: ${({theme}) => theme.FONT.PARAGRAPH};
    color: ${({theme}) => theme.COLORS.WHITE};
  }
`

export const Logout = styled.button`
  background: none;
  border: none;

  svg {
    font-size: ${({theme}) => theme.FONT.MEDIUM};
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }
`
export const MenuMobile = styled(Logout)`

`
