import React from 'react';
import { Content, HomeContainer, Search } from "./home.styles.ts";
import { Input } from "../../components/input/input.tsx";
import { Section } from "../../components/section/section.tsx";
import { FiSearch } from "react-icons/fi";
import { Notes } from "../../components/notes/notes.tsx";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../../routes/routes.enum.ts";

const myNotes = [
  {
    id: 1,
    title: 'Module one',
    tags: [
      {id: 1, name: 'Components'},
      {id: 2, name: 'Styled component'}
    ]
  },
  {
    id: 2,
    title: 'Module one',
    tags: [
      {id: 1, name: 'Teste'},
      {id: 2, name: 'Styled component'}
    ]
  },
  {
    id: 3,
    title: 'Module one',
    tags: [
      {id: 1, name: 'Components'},
      {id: 2, name: 'Styled component'}
    ]
  },
  {
    id: 4,
    title: 'Module one',
    tags: [
      {id: 1, name: 'Teste'},
      {id: 2, name: 'Styled component'}
    ]
  }
]

export type FilterType = 'all' | 'node' | 'react'

export const Home: React.FC = () => {
  const navigate = useNavigate()
  
  const handleGoToDetailsNote = (id: number | string) => {
    const newId = id.toString()
    navigate(`${RoutesEnum.details.replace(':id', newId)}`)
  }
  
  return (
    <HomeContainer>
      
      <Search>
        <Input
          placeholder="Search by title..."
          icon={FiSearch}
          type={'text'}
        />
      </Search>
      
      <Content>
        <Section title={'My notes'}>
          
          {
            myNotes && myNotes.map(({title, tags, id}) => (
              <Notes
                key={id}
                title={title}
                tags={tags}
                onClick={() => handleGoToDetailsNote(id)}
              />
            ))
          }
        </Section>
      </Content>
    </HomeContainer>
  );
};
