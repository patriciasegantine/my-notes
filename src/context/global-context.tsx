import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface GlobalContextType {
  showMenuMobile: boolean
  setShowMenuShowMenuMobile: React.Dispatch<boolean>
  isMobileSizer: boolean
  setIsMobileSizer: React.Dispatch<boolean>
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({children}) => {
  const [showMenuMobile, setShowMenuShowMenuMobile] = useState<boolean>(false)
  const [isMobileSizer, setIsMobileSizer] = useState<boolean>(false)
  
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
    <GlobalContext.Provider
      value={{
        showMenuMobile,
        setShowMenuShowMenuMobile,
        
        isMobileSizer,
        setIsMobileSizer
        
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
