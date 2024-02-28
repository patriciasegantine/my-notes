import React from 'react';
import { ButtonContent, ContainerButton, LoadingIcon } from "./button.styles.ts";

interface ButtonProps {
  title: string
  loading?: boolean
  onClick: () => void
  icon?: any
}

export const Button: React.FC<ButtonProps> = ({title, onClick, loading = false, icon: Icon}) => {
  
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
