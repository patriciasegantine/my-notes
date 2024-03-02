import styled from "styled-components";
import { FullWidthContainer } from "../../global.styles.ts";
import User from '../../assets/user.svg'

export const ProfileContainer = styled(FullWidthContainer)`
`
export const ProfileHeader = styled.header`
  position: relative;

  width: 100%;
  height: 144px;

  background: ${({theme}) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({theme}) => theme.SPACING.REGULAR};
  margin-bottom: ${({theme}) => theme.SPACING.EXTRA_GIANT};
`

export const ProfileBrand = styled.button`


  color: ${({theme}) => theme.COLORS.HIGHLIGHT};
  font-family: "Kodchasan", sans-serif;
  font-size: ${({theme}) => theme.FONT.LARGE};

  border: none;
  background: none;
`

export const ProfileContent = styled.div`

  max-width: 600px;
  margin: -150px auto 0;
`

export const Form = styled.form`



  div:nth-child(3) {
    margin-top: ${({theme}) => theme.SPACING.REGULAR};
  }
`

export const UserAvatarProfile = styled.div`

  width: 140px;
  height: 140px;
  position: relative;

  margin: ${({theme}) => theme.SPACING.EXTRA_GIANT} auto;

  background: url(${User}) no-repeat center center;
  border-radius: 50%;

  img {
    border-radius: 50%;
    width: 100%;
    object-fit: cover;
  }
`

export const UserAvatarIcon = styled.label`

  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({theme}) => theme.COLORS.HIGHLIGHT};
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;
  right: 0;

  cursor: pointer;

  input[type="file"] {
    display: none;
  }
`

export const ChangePassword = styled.div`

  padding-top: ${({theme}) => theme.SPACING.REGULAR};
  margin-bottom: ${({theme}) => theme.SPACING.SMALL};

  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-size: ${({theme}) => theme.FONT.PARAGRAPH};
  font-weight: 400;
`
