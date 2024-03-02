import React, { useState } from 'react';
import { Form, NewNoteContainer, NewNoteContent, NewNoteTitles, TagsSection } from "./new-note.styles.ts";
import { Header } from "../../components/header/header.tsx";
import { Input } from "../../components/input/input.tsx";
import { Section } from "../../components/section/section.tsx";
import { ButtonText } from "../../components/button-text/button-text.tsx";
import { FiArrowLeft, FiSave } from "react-icons/fi";
import { BackButtonContainer } from "../../global.styles.ts";
import { Button } from "../../components/button/button.tsx";
import { useNavigate } from "react-router-dom";
import { RouterEnum } from "../../router/router.enum.ts";
import { TextArea } from "../../components/text-area/text-area.tsx";
import { NoteItem } from "../../components/note-item/note-item.tsx";
import { useGlobalContext } from "../../context/global-context.tsx";

export const NewNote: React.FC = () => {
  
  const navigate = useNavigate()
  const {createOrEditNote} = useGlobalContext()
  
  const [noteData, setNoteData] = useState<string>('http://localhost:3000')
  
  const handleGoBackToHome = () => {
    navigate(RouterEnum.home)
  }
  
  const handleOnSaveNewNote = () => {
    handleGoBackToHome()
  }
  
  const handleOnChangeValueDescriptionNote = () => {
    setNoteData('testando')
  }
  return (
    <NewNoteContainer>
      <Header/>
      
      <BackButtonContainer>
        <ButtonText
          title={'back'}
          onClick={handleGoBackToHome}
          icon={FiArrowLeft}/>
      </BackButtonContainer>
      
      <NewNoteContent>
        
        <Form id={'newNote'}>
          <NewNoteTitles>
            {
              createOrEditNote === 'create'
                ? 'New Note'
                : 'Edit Note'
            }
          </NewNoteTitles>
          <Input type="text" placeholder={'Title'}/>
          <TextArea placeholder={'Note description...'}/>
          
          <Section title={'Links'}>
            <NoteItem
              onClick={handleOnChangeValueDescriptionNote}
              isNew={true}
              value={''}
              placeholder={'New link'}
              onChange={() => alert}
            />
            <NoteItem
              onClick={handleOnChangeValueDescriptionNote}
              isNew={false}
              value={noteData}
              placeholder={'New link'}
              onChange={() => alert}
            />
          </Section>
          
          <Section title={'Tags'}>
            <TagsSection>
              <NoteItem
                onClick={handleOnChangeValueDescriptionNote}
                isNew={true}
                value={''}
                placeholder={'New tag'}
                onChange={() => alert}
              />
              <NoteItem
                onClick={handleOnChangeValueDescriptionNote}
                isNew={false}
                value={'Node'}
                placeholder={'New tag'}
                onChange={() => alert}
              /> <NoteItem
              onClick={handleOnChangeValueDescriptionNote}
              isNew={false}
              value={'Next'}
              placeholder={'New tag'}
              onChange={() => alert}
            />
              <NoteItem
                onClick={handleOnChangeValueDescriptionNote}
                isNew={false}
                value={'React'}
                placeholder={'New tag'}
                onChange={() => alert}
              />
            </TagsSection>
          </Section>
          
          <Button
            title={
              createOrEditNote === 'create'
                ? 'Create'
                : 'Save'
            }
            onClick={handleOnSaveNewNote}
            icon={FiSave}
          />
        
        
        </Form>
      
      </NewNoteContent>
    </NewNoteContainer>
  );
};
