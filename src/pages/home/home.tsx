import React, { useState } from 'react';
import { Brand, Button, HomeContainer, HomeContent, Menu, Search } from "./home.styles.ts";
import { Header } from "../../components/header/header.tsx";
import { ButtonText } from "../../components/button-text/button-text.tsx";
import theme from "../../theme.ts";

type FilterType = 'all' | 'node' | 'react'

export const Home: React.FC = () => {
  
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  
  const onChangeActiveFilter = (type: FilterType) => {
    setActiveFilter(type)
  }
  
  return (
    <HomeContainer>
      <Brand>
        <h1>My Notes</h1>
      </Brand>
      
      <Header/>
      
      <Menu>
        <li id={'all'}>
          <ButtonText
            title={'All'}
            active={activeFilter === 'all'}
            onClick={() => onChangeActiveFilter('all')}
          />
        </li>
        
        <li>
          <ButtonText
            title={'Node'}
            active={activeFilter === 'node'}
            onClick={() => onChangeActiveFilter('node')}
          />
        </li>
        
        <li>
          <ButtonText
            title={'React'}
            active={activeFilter === 'react'}
            onClick={() => onChangeActiveFilter('react')}
          />
        </li>
      </Menu>
      
      <Search>
      
      </Search>
      
      <HomeContent>
      
      </HomeContent>
      
      <Button>
        <ButtonText title={"+ Create Note"} color={theme.COLORS.BACKGROUND_900}/>
      </Button>
    
    </HomeContainer>
  );
};
