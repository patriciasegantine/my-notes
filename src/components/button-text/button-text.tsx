import React from 'react';
import { ButtonTextContainer } from "./button-text.styles.ts";
import theme from "../../theme.ts";

interface ButtonLinkProps {
  title: string
  color?: string
  active?: boolean
  onClick?: () => void
}

export const ButtonText: React.FC<ButtonLinkProps> = ({
                                                        title,
                                                        color = theme.COLORS.GRAY_100,
                                                        active = false,
                                                        onClick
                                                      }) => {
  return (
    <ButtonTextContainer
      type="button"
      color={color}
      $active={active.toString()}
      onClick={onClick}
    >
      {title}
    </ButtonTextContainer>
  );
};
