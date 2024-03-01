import React from 'react';
import { Background, ForgotPassword, Form, SignUpLink, SingInContainer, SingInContent } from "./sign-in.styles.ts";
import { Input } from "../../components/input/input.tsx";
import { FiArrowUpRight, FiLogIn, FiMail } from "react-icons/fi";
import { Button } from "../../components/button/button.tsx";
import { ButtonText } from "../../components/button-text/button-text.tsx";
import { useGlobalContext } from "../../context/global-context.tsx";
import { useNavigate } from "react-router-dom";
import { RouterEnum } from "../../router/router.enum.ts";

export const SignIn: React.FC = () => {
  
  const {isMobileSizer} = useGlobalContext();
  const navigate = useNavigate()
  
  const handleGoBackToSignUp = () => {
    navigate(RouterEnum.signUp)
  }
  
  return (
    <SingInContainer>
      
      <SingInContent>
        <h1>My Notes</h1>
        <p>Application to save and manage your useful links.</p>
        
        <h2>Sing in</h2>
        
        <Form>
          <Input placeholder={'Email'} icon={FiMail} type='text'/>
          <Input placeholder={'Password'} type='password'/>
          
          <Button
            title={'Sing in'}
            onClick={() => alert('sing in')}
            icon={FiLogIn}
            loading={false}
          />
        </Form>
        
        <ForgotPassword>
          <ButtonText title={'Forgot Password?'}/>
        </ForgotPassword>
        
        <SignUpLink>
          Don't have an account?
          <ButtonText
            title={'Sign up'}
            icon={FiArrowUpRight}
            size={15}
            onClick={handleGoBackToSignUp}
          />
        </SignUpLink>
      
      </SingInContent>
      
      <Background $mobile_size={isMobileSizer.toString()}/>
    </SingInContainer>
  );
};
