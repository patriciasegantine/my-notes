import React from 'react';
import { Profile, ProfileContent } from "../header/header.styles.ts";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../../routes/routes.enum.ts";
import { Avatar } from '@mui/material';

const user = {
  name: "Patricia Segantine",
  url: "https://github.com/patriciasegantine.png"
  
}

export const AvatarComponent: React.FC = () => {
  
  const navigate = useNavigate()
  
  const handleGoToProfile = () => {
    navigate(RoutesEnum.profile)
  }
  return (
    <Profile onClick={handleGoToProfile}>
      
      
      <ProfileContent>
        <span>Welcome</span>
        <strong>{user.name}</strong>
      </ProfileContent>
      
      <Avatar
        alt={user.name}
        src={
          user.url
            ? user.url
            : "/static/images/avatar/1.jpg"
        }
      />
    </Profile>
  );
};
