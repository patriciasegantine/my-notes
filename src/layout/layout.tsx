import React from "react";
import { Content, LayoutContainer } from "./layout.styles.ts";
import { Header } from "../components/header/header.tsx";
import { Aside } from "../components/aside/aside.tsx";
import { AppRoutes } from "../routes/app.routes.tsx";
import { useGlobalContext } from "../context/global-context.tsx";

export const Layout: React.FC = () => {
  
  const {isMobileSizer} = useGlobalContext()
  
  return (
    <LayoutContainer $mobile_size={isMobileSizer.toString()}>
      <Header/>
      
      <Aside/>
      
      <Content>
        <AppRoutes/>
      </Content>
    
    </LayoutContainer>
  );
};
