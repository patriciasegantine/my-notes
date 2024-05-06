import React from 'react';
import { Form, ProfileContainer, ProfileContent, UserAvatarIcon, UserAvatarProfile } from "./profile.styles.ts";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/input/input.tsx";
import { Button } from "../../components/button/button.tsx";
import { RoutesEnum } from "../../routes/routes.enum.ts";
import { ButtonText } from "../../components/button-text/button-text.tsx";
import { BackButtonContainer } from "../../global.styles.ts";

export const Profile: React.FC = () => {
  
  const navigate = useNavigate()
  
  const handleGoToHome = () => {
    navigate(RoutesEnum.home)
  }
  
  return (
    <ProfileContainer>
      <ProfileContent>
        <BackButtonContainer>
          <ButtonText
            title={'back'}
            onClick={handleGoToHome}
            icon={FiArrowLeft}
          />
        </BackButtonContainer>
        
        <UserAvatarProfile>
          <img
            src="https://github.com/patriciasegantine.png"
            alt=""/>
          
          <UserAvatarIcon>
            <FiCamera/>
            <input id="avatar" type="file" placeholder={'test'}/>
          </UserAvatarIcon>
        </UserAvatarProfile>
        
        <Form>
          
          <Input placeholder={'Name'} icon={FiUser} type='text'/>
          <Input placeholder={'Email'} icon={FiMail} type='text'/>
          <Input placeholder={'New Password'} icon={FiLock} type='password'/>
          <Input placeholder={'Confirm Password'} icon={FiLock} type='password'/>
          
          <Button
            title={'Save'}
            onClick={() => alert('save')}
            loading={false}
          />
        </Form>
      </ProfileContent>
    
    </ProfileContainer>
  );
};
