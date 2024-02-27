import React from 'react';
import { InputContainer } from "./input.styles.ts";

interface InputProps {
  icon?: any
  placeholder: string
}

export const Input: React.FC<InputProps> = ({icon: Icon, placeholder}) => {
  return (
    <InputContainer>
      <input placeholder={placeholder}/>
      {Icon && <Icon size={20}/>}
    </InputContainer>
  );
};
