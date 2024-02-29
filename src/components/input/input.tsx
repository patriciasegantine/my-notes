import React from 'react';
import { InputContainer } from "./input.styles.ts";

interface InputProps {
  icon?: any
  placeholder: string
  type: React.HTMLInputTypeAttribute
}

export const Input: React.FC<InputProps> = ({icon: Icon, placeholder, type}) => {
  return (
    <InputContainer>
      {Icon && <Icon size={20}/>}
      <input placeholder={placeholder} type={type}/>
    </InputContainer>
  );
};
