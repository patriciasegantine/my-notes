import React from 'react';
import { HeaderContainer, HeaderFlexContainer, MenuMobile } from "./header.styles.ts";
import { FiMenu } from "react-icons/fi";
import { useGlobalContext } from "../../context/global-context.tsx";
import { AvatarComponent } from "../avatar/avatar.tsx";

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = () => {
  
  const {isMobileSizer, showMenuMobile, setShowMenuShowMenuMobile} = useGlobalContext();
  
  const handleOnShowMenuMobile = () => {
    setShowMenuShowMenuMobile(!showMenuMobile)
  }
  
  return (
    <HeaderContainer $mobile_size={isMobileSizer.toString()}>
      {
        isMobileSizer &&
        <MenuMobile onClick={handleOnShowMenuMobile}>
          <FiMenu size={20}/>
        </MenuMobile>
      }
      
      <HeaderFlexContainer>
        <AvatarComponent/>
        
        {/*<Logout>*/}
        {/*  <RiShutDownLine/>*/}
        {/*</Logout>*/}
      </HeaderFlexContainer>
    
    
    </HeaderContainer>
  );
};
