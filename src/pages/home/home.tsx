import React, { useState } from 'react';
import { Brand, Button, Content, HomeContainer, Menu, Search } from "./home.styles.ts";
import { Header } from "../../components/header/header.tsx";
import { Input } from "../../components/input/input.tsx";
import { Section } from "../../components/section/section.tsx";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Notes } from "../../components/notes/notes.tsx";
import { Nav } from "../../components/nav/nav.tsx";
import { useGlobalContext } from "../../context/global-context.tsx";
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
  }
]

export type FilterType = 'all' | 'node' | 'react'

export const Home: React.FC = () => {
  const navigate = useNavigate()
  
  const {isMobileSizer, setCreateOrEditNote} = useGlobalContext();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  
  const onChangeActiveFilter = (type: FilterType) => {
    setActiveFilter(type)
  }
  
  const handleGoToDetailsNote = (id: number | string) => {
    const newId = id.toString()
    navigate(`${RoutesEnum.details.replace(':id', newId)}`)
  }
  
  const handleGoToNewNote = () => {
    navigate(RoutesEnum.newNote)
    setCreateOrEditNote('create')
  };
  
  return (
    <HomeContainer $mobile_size={isMobileSizer.toString()}>
      <Header brand={false}/>
      
      <Menu $mobile_size={isMobileSizer.toString()}>
        <Brand>
          <h1>My Notes</h1>
        </Brand>
        
        <Nav
          activeFilter={activeFilter}
          onChangeActiveFilter={onChangeActiveFilter}
        />
        
        <Button onClick={handleGoToNewNote}>
          <FiPlus size={20}/>
          <span>New note</span>
        </Button>
      </Menu>
      
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
