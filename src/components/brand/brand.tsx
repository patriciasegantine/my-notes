import React from 'react';
import { ProfileBrand } from "../../pages/profile/profile.styles.ts";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../../routes/routes.enum.ts";

export const Brand: React.FC = () => {
  
  const navigate = useNavigate()
  
  const handleGoToHome = () => {
    navigate(RoutesEnum.home)
  }
  
  return (
    <ProfileBrand onClick={handleGoToHome}>
      My Notes
    </ProfileBrand>
  );
};
