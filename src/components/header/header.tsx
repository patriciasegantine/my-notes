import React, { useEffect } from 'react';
import { HeaderContainer, ImageContainer, Logout, MenuMobile, Profile, ProfileContent } from "./header.styles.ts";
import { RiShutDownLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { useGlobalContext } from "../../context/global-context.tsx";

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = () => {
  const {isMobileSizer, setIsMobileSizer, showMenuMobile, setShowMenuShowMenuMobile} = useGlobalContext();
  
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
    <HeaderContainer>
      {
        isMobileSizer &&
        <MenuMobile onClick={handleOnShowMenuMobile}>
          <FiMenu size={20}/>
        </MenuMobile>
      }
      
      <Profile>
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
