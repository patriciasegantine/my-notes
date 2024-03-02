import React from 'react';
import { ButtonContent, ContainerButton, LoadingIcon } from "./button.styles.ts";
import theme from "../../theme.ts";

interface ButtonProps {
  title: string
  loading?: boolean
  onClick: () => void
  icon?: any
  color?: string
  background?: string
}

export const Button: React.FC<ButtonProps> = (
  {
    title,
    onClick,
    icon: Icon,
    loading = false,
    color = theme.COLORS.BACKGROUND_800,
    background = theme.COLORS.HIGHLIGHT
  }) => {
  
  const loadingButton = (
    <ButtonContent>
      <LoadingIcon/>
      <span>Loading...</span>
    </ButtonContent>
  )
  
  const regularButton = (
    <ButtonContent>
      {Icon && <Icon size={15}/>}
      <span>{title}</span>
    </ButtonContent>
  )
  
  return (
    <ContainerButton
      background={background}
      color={color}
      type="button"
      disabled={loading}
      onClick={onClick}
    >
      <ButtonContent>
        {
          loading
            ? loadingButton
            : regularButton
        }
      </ButtonContent>
    </ContainerButton>
  );
};
