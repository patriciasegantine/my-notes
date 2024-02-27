import React from 'react';
import { ButtonText } from "../button-text/button-text.tsx";
import { FilterType } from "../../pages/home/home.tsx";
import { NavContainer } from "./nav.styles.ts";

interface NavProps {
  activeFilter: FilterType
  onChangeActiveFilter: (type: FilterType) => void
}

export const Nav: React.FC<NavProps> = ({activeFilter, onChangeActiveFilter}) => {
  return (
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
  );
};
