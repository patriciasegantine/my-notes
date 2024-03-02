import React from 'react';
import { Background, Form, SignInLink, SingUpContainer, SingUpContent } from "./sign-up.styles.ts";
import { Input } from "../../components/input/input.tsx";
import { FiArrowUpRight, FiLock, FiLogIn, FiMail, FiUser } from "react-icons/fi";
import { Button } from "../../components/button/button.tsx";
import { useGlobalContext } from "../../context/global-context.tsx";
import { Link } from "react-router-dom";
import { RoutesEnum } from "../../routes/routes.enum.ts";

export const SignUp: React.FC = () => {
  
  const {isMobileSizer} = useGlobalContext();
  
  return (
    <SingUpContainer>
      
      <Background $mobile_size={isMobileSizer.toString()}/>
      <SingUpContent>
        <h1>My Notes</h1>
        <p>Application to save and manage your useful links.</p>
        
        <h2>Sign up</h2>
        
        <Form>
          <Input placeholder={'Name'} icon={FiUser} type='text'/>
          <Input placeholder={'Email'} icon={FiMail} type='text'/>
          <Input placeholder={'Password'} icon={FiLock} type='password'/>
          <Input placeholder={'Confirm Password'} icon={FiLock} type='password'/>
          
          <Button
            title={'Create account'}
            onClick={() => alert('sign-up')}
            icon={FiLogIn}
            loading={false}
          />
        </Form>
        
        <SignInLink>
          Have an account?
          
          <Link to={RoutesEnum.signIn}>
            <FiArrowUpRight/>
            Sign in
          </Link>
        </SignInLink>
      
      </SingUpContent>
    
    </SingUpContainer>
  );
};
