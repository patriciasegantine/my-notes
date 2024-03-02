import React from 'react';
import { TextAreaContainer, TextAreaContent } from "./text-area.styles.ts";

interface InputProps {
  icon?: any
  placeholder: string
  rows?: number
}

export const TextArea: React.FC<InputProps> = ({icon: Icon, placeholder, rows = 10}) => {
  
  const maxLength = 300
  
  return (
    <TextAreaContainer>
      <TextAreaContent>
        {Icon && <Icon size={20}/>}
        <textarea
          placeholder={placeholder}
          rows={rows}
          maxLength={300}
        />
      </TextAreaContent>
      
      <p>
        <span>
          0
        </span>
        /
        <span>
        {maxLength}
        </span>
      </p>
    </TextAreaContainer>
  );
};
