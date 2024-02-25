import styled, { keyframes } from "styled-components";
import { RiLoaderLine } from "react-icons/ri";

const spinAnimation = keyframes`
  0% {
    transform: rotate(360deg)
  }
  100% {
    animation: spin 1s linear infinite
  }
`

export const ContainerButton = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.HIGHLIGHT};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  height: 56px;
  border: 0;
  padding: 0 ${({theme}) => theme.SPACING.SMALL};
  margin-top: ${({theme}) => theme.SPACING.SMALL};
  border-radius: ${({theme}) => theme.BORDER.RADIUS_REGULAR};

  font-weight: 500;

  &:disabled {
    opacity: .5;
  }
`

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const LoadingIcon = styled(RiLoaderLine)`
  animation: ${spinAnimation} 1.5s linear infinite
`
