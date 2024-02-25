import React from 'react';
import { ButtonContent, ContainerButton, LoadingIcon } from "./button.styles.ts";

interface ButtonProps {
  title: string
  loading?: boolean
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({title, onClick, loading = false}) => {
  
  return (
    <ContainerButton
      type="button"
      disabled={loading}
      onClick={onClick}
    >
      {
        loading
          ? (
            <ButtonContent>
              <LoadingIcon/>
              <span>Loading...</span>
            </ButtonContent>
          )
          : title
      }
    </ContainerButton>
  );
};
