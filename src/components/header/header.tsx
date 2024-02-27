import React from 'react';
import { HeaderContainer, ImageContainer, Logout, MenuMobile, Profile, ProfileContent } from "./header.styles.ts";
import { RiShutDownLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

interface HeaderProps {
  isMobileSizer: boolean
  onClick: () => void
}

export const Header: React.FC<HeaderProps> = ({onClick, isMobileSizer}) => {
  return (
    <HeaderContainer>
      {
        isMobileSizer &&
        <MenuMobile onClick={onClick}>
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
