import React, { useEffect, useState } from 'react';
import { Brand, Button, ButtonClose, Content, HomeContainer, Menu, Search } from "./home.styles.ts";
import { Header } from "../../components/header/header.tsx";
import { ButtonText } from "../../components/button-text/button-text.tsx";
import theme from "../../theme.ts";
import { Input } from "../../components/input/input.tsx";
import { Section } from "../../components/section/section.tsx";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Notes } from "../../components/notes/notes.tsx";
import { Nav } from "../../components/nav/nav.tsx";
import { AiFillCloseCircle } from "react-icons/ai";

export type FilterType = 'all' | 'node' | 'react'

export const Home: React.FC = () => {
  
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const [showMenuMobile, setShowMenuShowMenuMobile] = useState<boolean>(false)
  const [isMobileSizer, setIsMobileSizer] = useState<boolean>(false)
  
  const onChangeActiveFilter = (type: FilterType) => {
    setActiveFilter(type)
  }
  
  const myNotes = {
    title: 'Module one',
    tags: [
      {id: 1, name: 'Components'},
      {id: 2, name: 'Styled component'}
    ]
  }
  
  const handleOnShowMenuMobile = () => {
    setShowMenuShowMenuMobile(!showMenuMobile)
  }
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileSizer(false)
      } else {
        setIsMobileSizer(true)
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
    
  }, []);
  
  return (
    <HomeContainer $mobile={isMobileSizer.toString()}>
      <Header
        isMobileSizer={isMobileSizer}
        onClick={handleOnShowMenuMobile}
      />
      
      <Menu
        $mobile_size={isMobileSizer.toString()}
        $show_mobile={showMenuMobile.toString()}
      >
        <Brand>
          <h1>My Notes</h1>
          
          {
            isMobileSizer &&
            <ButtonClose
              onClick={handleOnShowMenuMobile}
              color={theme.COLORS.GRAY_100}
            >
              <AiFillCloseCircle/>
            </ButtonClose>
          }
        
        </Brand>
        
        <Nav
          activeFilter={activeFilter}
          onChangeActiveFilter={onChangeActiveFilter}
        />
        
        <Button>
          <ButtonText
            icon={FiPlus}
            title={`Create Note`}
            color={theme.COLORS.BACKGROUND_900}/>
        </Button>
      </Menu>
      
      <Search>
        <Input
          placeholder="Search by title..."
          icon={FiSearch}
        />
      </Search>
      
      <Content>
        <Section title={'My notes'}>
          <Notes data={myNotes}/>
        </Section>
      </Content>
    
    
    </HomeContainer>
  );
};
