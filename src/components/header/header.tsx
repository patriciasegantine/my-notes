import React from 'react';
import { HeaderContainer, ImageContainer, Logout, MenuMobile, Profile, ProfileContent } from "./header.styles.ts";
import { RiShutDownLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { useGlobalContext } from "../../context/global-context.tsx";
import { useNavigate } from "react-router-dom";
import { RouterEnum } from "../../router/router.enum.ts";

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = () => {
  
  const {isMobileSizer, showMenuMobile, setShowMenuShowMenuMobile} = useGlobalContext();
  
  const navigate = useNavigate()
  
  const handleGoToProfile = () => {
    navigate(RouterEnum.profile)
  }
  
  const handleOnShowMenuMobile = () => {
    setShowMenuShowMenuMobile(!showMenuMobile)
  }
  
  return (
    <HeaderContainer>
      {
        isMobileSizer &&
        <MenuMobile onClick={handleOnShowMenuMobile}>
          <FiMenu size={20}/>
        </MenuMobile>
      }
      
      <Profile onClick={handleGoToProfile}>
        <ImageContainer>
          <img
            src="https://github.com/patriciasegantine.png"
            alt="user photo profile"
          />
        </ImageContainer>
        
        <ProfileContent>
          <span>Welcome</span>
          <strong>Patricia Segantine</strong>
        </ProfileContent>
      </Profile>
      
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </HeaderContainer>
  );
};
