import React from 'react';
import { NoteItemContainer } from "./note-item.styles.ts";
import { FiPlus, FiX } from "react-icons/fi";

interface NoteItemProps {
  isNew: boolean
  value: string
  onClick: () => void
  placeholder: string
  onChange: () => void
}

export const NoteItem: React.FC<NoteItemProps> = (
  {
    isNew,
    value,
    onClick,
    placeholder,
    onChange
  }) => {
  return (
    <NoteItemContainer $is_new={isNew.toString()}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        placeholder={placeholder}
        onChange={onChange}
      />
      
      <button
        onClick={onClick}
        type="button"
      >
        
        {
          isNew
            ? <FiPlus size={20}/>
            : <FiX size={20}/>
        }
      
      </button>
    
    </NoteItemContainer>
  );
};
