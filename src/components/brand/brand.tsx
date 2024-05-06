import React from 'react';
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../../routes/routes.enum.ts";
import { BrandContent } from "./brand.styles.ts";

export type TBrand = 'small' | 'medium' | 'large'

export interface IBrand {
  size: TBrand
}

export const Brand: React.FC<IBrand> = ({size}) => {
  
  const navigate = useNavigate()
  
  const handleGoToHome = () => {
    navigate(RoutesEnum.home)
  }
  
  return (
    <BrandContent onClick={handleGoToHome} size={size}>
      My Notes
    </BrandContent>
  );
};
