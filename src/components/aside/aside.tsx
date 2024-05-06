import React, { useState } from 'react';
import { ButtonText } from "../button-text/button-text.tsx";
import { AsideContainer, NavContainer } from "./aside.styles.ts";
import { FilterType } from "../../pages/home/home.tsx";
import { BrandContainer, Button } from "../../layout/layout.styles.ts";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/global-context.tsx";
import { RoutesEnum } from "../../routes/routes.enum.ts";
import { Brand } from "../brand/brand.tsx";

export const Aside: React.FC = () => {
  
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  
  const navigate = useNavigate()
  
  const {isMobileSizer, setCreateOrEditNote, showMenuMobile, setShowMenuShowMenuMobile} = useGlobalContext();
  
  const handleGoToNewNote = () => {
    navigate(RoutesEnum.newNote)
    setCreateOrEditNote('create')
  };
  
  const onChangeActiveFilter = (type: FilterType) => {
    setActiveFilter(type)
  }
  return (
    
    <AsideContainer $mobile_size={isMobileSizer.toString()} $show_menu_mobile={showMenuMobile.toString()}>
      {
        isMobileSizer &&
        <button onClick={() => setShowMenuShowMenuMobile(false)}>close</button>
      }
      
      <BrandContainer>
        <Brand size={'large'}/>
      </BrandContainer>
      
      <NavContainer>
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
      </NavContainer>
      
      <Button onClick={handleGoToNewNote}>
        <FiPlus size={20}/>
        <span>New note</span>
      </Button>
    </AsideContainer>
  
  );
};
