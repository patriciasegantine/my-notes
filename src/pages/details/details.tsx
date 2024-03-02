import React from 'react';
import { DetailContainerButton, DetailsContainer, DetailsContent, Links, TagsSection } from "./details.styles.ts";
import { Section } from "../../components/section/section.tsx";
import { Button } from "../../components/button/button.tsx";
import { Tags } from "../../components/tags/tags.tsx";
import { ButtonText } from "../../components/button-text/button-text.tsx";
import { Header } from "../../components/header/header.tsx";
import { FiArrowLeft, FiPenTool, FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { BackButtonContainer } from "../../global.styles.ts";
import theme from "../../theme.ts";
import { useGlobalContext } from "../../context/global-context.tsx";
import { RoutesEnum } from "../../routes/routes.enum.ts";

export const Details: React.FC = () => {
  
  const navigate = useNavigate()
  const {setCreateOrEditNote} = useGlobalContext();
  
  const handleGoBackToHome = () => {
    navigate(RoutesEnum.home)
  }
  
  const handleOnEditNote = () => {
    navigate(RoutesEnum.newNote)
    setCreateOrEditNote('edit')
  }
  
  return (
    
    <DetailsContainer>
      <Header/>
      
      <BackButtonContainer>
        <ButtonText
          title={'back'}
          onClick={handleGoBackToHome}
          icon={FiArrowLeft}/>
      </BackButtonContainer>
      
      <DetailsContent>
        
        <h1>React for Beginner</h1>
        
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
          Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        
        <TagsSection>
          <Section title={'Link'}>
            <Links>
              <li>
                <a href="https://react.dev/" target="_blank">https://react.dev/</a>
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
        </TagsSection>
        
        <DetailContainerButton>
          <Button
            title={'Edit'}
            onClick={handleOnEditNote}
            icon={FiPenTool}
            color={theme.COLORS.GRAY_100}
            background={theme.COLORS.BACKGROUND_900}
          />
          
          <Button
            title={'Delete'}
            onClick={() => alert('delete')}
            icon={FiTrash}
            color={theme.COLORS.GRAY_100}
            background={theme.COLORS.BACKGROUND_900}
          />
        </DetailContainerButton>
      
      
      </DetailsContent>
    
    </DetailsContainer>
  
  );
};
