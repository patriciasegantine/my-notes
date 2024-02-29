import React from 'react';
import { NotesContainer } from "./notes.styles.ts";
import { Tags } from "../tags/tags.tsx";

interface NotesProps {
  onClick: () => void
  title: string
  tags: {
    id: number
    name: string
  }[]
  
}

export const Notes: React.FC<NotesProps> = ({title, tags, onClick}) => {
  return (
    <NotesContainer onClick={onClick}>
      <h1>{title}</h1>
      {
        tags &&
        <footer>
          {
            tags.map(({id, name}) => (
              <Tags key={id} title={name}/>)
            )
          }
        </footer>
      }
    </NotesContainer>
  );
};
