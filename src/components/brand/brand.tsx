import React from 'react';
import { ProfileBrand } from "../../pages/profile/profile.styles.ts";
import { RouterEnum } from "../../router/router.enum.ts";
import { useNavigate } from "react-router-dom";

export const Brand: React.FC = () => {
  
  const navigate = useNavigate()
  
  const handleGoToHome = () => {
    navigate(RouterEnum.home)
  }
  
  return (
    <ProfileBrand onClick={handleGoToHome}>
      My Notes
    </ProfileBrand>
  );
};
