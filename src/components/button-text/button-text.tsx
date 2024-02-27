import React from 'react';
import { ButtonTextContainer } from "./button-text.styles.ts";
import theme from "../../theme.ts";

interface ButtonLinkProps {
  title: string
  color?: string
  active?: boolean
  onClick?: () => void
  icon?: any
}

export const ButtonText: React.FC<ButtonLinkProps> = (
  {
    title,
    color = theme.COLORS.GRAY_100,
    active = false,
    onClick,
    icon: Icon
  }) => {
  return (
    <ButtonTextContainer
      type="button"
      color={color}
      $active={active.toString()}
      onClick={onClick}
    >
      {Icon && <Icon size={20}/>}
      <p>{title}</p>
    </ButtonTextContainer>
  );
};
