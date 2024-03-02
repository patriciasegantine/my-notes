import React from 'react';
import { Background, ForgotPassword, Form, SignUpLink, SingInContainer, SingInContent } from "./sign-in.styles.ts";
import { Input } from "../../components/input/input.tsx";
import { FiArrowUpRight, FiLogIn, FiMail } from "react-icons/fi";
import { Button } from "../../components/button/button.tsx";
import { ButtonText } from "../../components/button-text/button-text.tsx";
import { useGlobalContext } from "../../context/global-context.tsx";
import { Link } from "react-router-dom";
import { RoutesEnum } from "../../routes/routes.enum.ts";

export const SignIn: React.FC = () => {
  
  const {isMobileSizer} = useGlobalContext();
  
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
          
          <Link to={RoutesEnum.signUp}>
            <FiArrowUpRight/>
            Sign up
          </Link>
        </SignUpLink>
      
      </SingInContent>
      
      <Background $mobile_size={isMobileSizer.toString()}/>
    </SingInContainer>
  );
};
