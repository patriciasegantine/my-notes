import React from 'react';
import { HeaderContainer, ImageContainer, Logout, Profile, ProfileContent } from "./header.styles.ts";
import { RiShutDownLine } from "react-icons/ri";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
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
