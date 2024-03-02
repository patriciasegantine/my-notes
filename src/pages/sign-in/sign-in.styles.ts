import styled, { css } from "styled-components";
import { FullWidthContainer } from "../../global.styles.ts";

import backgroundImage from '../../assets/signIn.jpg'

export const SingInContainer = styled(FullWidthContainer)`
  display: flex;
  align-items: stretch;
`

export const SingInContent = styled.div`
  padding: 0 ${({theme}) => theme.SPACING.GIANT};

  width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  h1 {
    font-family: "Kodchasan", sans-serif;
    color: ${({theme}) => theme.COLORS.HIGHLIGHT};
    font-size: ${({theme}) => theme.FONT.EXTRA_GIANT};
  }

  h2 {
    font-size: ${({theme}) => theme.FONT.LARGE};
    margin-top: ${({theme}) => theme.SPACING.GIANT};
    margin-bottom: ${({theme}) => theme.SPACING.MEDIUM};
  }

  p {
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: ${({theme}) => theme.FONT.SMALL};
    margin-top: ${({theme}) => theme.SPACING.EXTRA_SMALL};
  }

  @media (max-width: 768px) {
    padding: 0 ${({theme}) => theme.SPACING.REGULAR};
  }
`

export const Form = styled.form`
  width: 100%;
`

export const ForgotPassword = styled.div`

  span {
    margin-top: ${({theme}) => theme.SPACING.SMALL};
    font-size: ${({theme}) => theme.FONT.SMALL};
  }
`

export const SignUpLink = styled.div`
  margin-top: ${({theme}) => theme.SPACING.EXTRA_GIANT};
  font-size: ${({theme}) => theme.FONT.SMALL};
  color: ${({theme}) => theme.COLORS.GRAY_100};

  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    font-size: ${({theme}) => theme.FONT.SMALL};
    color: ${({theme}) => theme.COLORS.GRAY_100};
    text-align: center;
    margin-top: ${({theme}) => theme.SPACING.EXTRA_SMALL}
  }
`
export const Background = styled.div<{ $mobile_size: string }>`

  flex: 1;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  filter: brightness(0.5);

  ${({$mobile_size}) => $mobile_size === 'true' && css`
    display: none;
  `
  }
`
