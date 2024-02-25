import React from 'react';
import { ButtonTextContainer } from "./button-text.styles.ts";

interface ButtonLinkProps {
  title: string
}

export const ButtonText: React.FC<ButtonLinkProps> = ({title, ...rest}) => {
  return (
    <ButtonTextContainer type="button" {...rest}>
      {title}
    </ButtonTextContainer>
  );
};
