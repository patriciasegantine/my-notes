import React from 'react';
import { Header } from "../components/header/header.tsx";
import { DetailsContainer, DetailsContent, Links } from "./details.styles.ts";
import { Section } from "../components/section/section.tsx";
import { Tags } from "../components/tags/tags.tsx";

export const Details: React.FC = () => {
  return (
    <DetailsContainer>
      <Header/>
      
      <DetailsContent>
        <Section title={'Link'}>
          <Links>
            <li>
              <a href="https://google.com" target="_blank">https://google.com</a>
            </li>
            
            <li>
              <a href="https://google.com" target="_blank">https://google.com</a>
            </li>
          </Links>
        </Section>
        
        <Section title={'Tags'}>
          <Tags title={'Express'}/>
          <Tags title={'NodeJS'}/>
        </Section>
      </DetailsContent>
    </DetailsContainer>
  );
};
