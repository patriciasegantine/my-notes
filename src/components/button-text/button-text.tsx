import React from 'react';
import { ButtonTextContainer } from "./button-text.styles.ts";
import theme from "../../theme.ts";

interface ButtonLinkProps {
  title: string
  color?: string
  active?: boolean
  onClick?: () => void
  icon?: any
  size?: number
}

export const ButtonText: React.FC<ButtonLinkProps> = (
  {
    title,
    color = theme.COLORS.GRAY_100,
    active = false,
    onClick,
    icon: Icon,
    size = 20
  }) => {
  return (
    <ButtonTextContainer
      type="button"
      color={color}
      $active={active.toString()}
      onClick={onClick}
    >
      {Icon && <Icon size={size}/>}
      <span>{title}</span>
    </ButtonTextContainer>
  );
};
