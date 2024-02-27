import React from 'react';
import { NotesContainer } from "./notes.styles.ts";
import { Tags } from "../tags/tags.tsx";

interface NotesProps {
  data: {
    title: string
    tags: {
      id: number
      name: string
    }[]
  }
  
}

export const Notes: React.FC<NotesProps> = ({data}) => {
  return (
    <NotesContainer>
      <h1>{data?.title}</h1>
      {
        data?.tags &&
        <footer>
          {
            data.tags.map(tag => (
              <Tags key={tag.id} title={tag.name}/>)
            )
          }
        </footer>
      }
    </NotesContainer>
  );
};
