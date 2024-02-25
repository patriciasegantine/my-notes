import React, { ReactNode } from 'react';
import { SectionContainer } from "./section.styles.ts";

interface SectionProps {
  title: string
  children: ReactNode
}

export const Section: React.FC<SectionProps> = ({title, children}) => {
  return (
    <SectionContainer>
      <h2>{title}</h2>
      {children}
    </SectionContainer>
  );
};
