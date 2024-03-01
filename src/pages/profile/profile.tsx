import React from 'react';
import {
  Form,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  UserAvatarIcon,
  UserAvatarProfile
} from "./profile.styles.ts";
import { ButtonText } from "../../components/button-text/button-text.tsx";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { RouterEnum } from "../../router/router.enum.ts";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/input/input.tsx";
import { Button } from "../../components/button/button.tsx";

export const Profile: React.FC = () => {
  
  const navigate = useNavigate()
  
  const handleGoToHome = () => {
    navigate(RouterEnum.home)
  }
  
  return (
    <ProfileContainer>
      <ProfileHeader>
        <ButtonText
          title={'Back'}
          onClick={handleGoToHome}
          icon={FiArrowLeft}
        />
      
      </ProfileHeader>
      
      <ProfileContent>
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
